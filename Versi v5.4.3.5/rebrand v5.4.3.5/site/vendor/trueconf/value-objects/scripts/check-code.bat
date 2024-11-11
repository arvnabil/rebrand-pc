@echo off

SET project_dir=%~dp0..
SET execute_dir=%project_dir%\vendor\bin
SET reports_dir=%project_dir%\reports
SET sources_dir=%project_dir%\src
SET phpstan_cfg=%project_dir%\phpstan.neon

if not exist %reports_dir% md %reports_dir%

START /min cmd /c %execute_dir%\phpmd.bat %sources_dir% text cleancode ^> %reports_dir%\phpmd.log
START /min cmd /c %execute_dir%\phpstan.bat analyse -c %phpstan_cfg% %sources_dir% ^> %reports_dir%\phpstan.log
START /min cmd /c %execute_dir%\phploc.bat %sources_dir% ^> %reports_dir%\phploc.log
START /min cmd /c %execute_dir%\phpcpd.bat %sources_dir% ^> %reports_dir%\phpcpd.log
START /min cmd /c %execute_dir%\dephpend.bat metrics %sources_dir% ^> %reports_dir%\dephpend.log
START /min cmd /c %execute_dir%\phpcf.bat --target 7.2 %sources_dir% ^> %reports_dir%\phpcf.log