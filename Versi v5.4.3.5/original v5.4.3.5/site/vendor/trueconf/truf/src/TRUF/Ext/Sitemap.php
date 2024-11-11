<?php

namespace TRUF\Ext;

/**
 * Description of Sitemap
 *
 * @author askra
 */
class Sitemap {
    
    const NOT_FOUND_URL = '/404.html';

    private $tree = array();
    private $tree_index = array();
    private $null = null;

    public function __construct($path_to_file) {
        $this->tree = YAML::read($path_to_file);
        $this->buildTree($this->tree, $this->null);
    }

    public function link($node_id) {
        $target_node = $this->findNodes('id', $node_id, 1);
        $node_path = count($target_node) ? '/' . $this->buildPath($target_node[0]) : self::NOT_FOUND_URL;
        return preg_replace('/(html)\/$/', '$1', $node_path);
    }

    private function buildTree(&$base_node, &$parent_node) {
        foreach ($base_node as &$node) {
            $node['parent'] = &$parent_node;
            $buf_node = $node;
            unset($buf_node['children'], $buf_node['parent']['children']);
            $this->tree_index[] = $buf_node;
            if (isset($node['children']) && is_array($node['children']))
                $this->buildTree($node['children'], $node);
        }
    }

    private function findNodes($key, $value, $limit = null) {
        $cnt = 0;
        $result = array();
        foreach ($this->tree_index as $node) {
            if (isset($node[$key]) && $node[$key] == $value)
                $result[] = $node;
            if (!is_null($limit) && $cnt >= $limit)
                break;
        }
        return $result;
    }

    private function buildPath($node, $path = '') {
        $current_path = $node['path'] . '/' . $path;
        if (isset($node['parent']))
            return $this->buildPath($node['parent'], $current_path);
        else
            return $current_path;
    }

}

