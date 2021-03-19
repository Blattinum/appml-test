@echo off
rem Patch word 5.5a setup to avoid calling int 10, 1130 with BH > 5
rem This is necessary to avoid hanging problems on older EGA boards
wdbf %1 18000 232 "144 144 144" 18015 232 "144 144 144"
