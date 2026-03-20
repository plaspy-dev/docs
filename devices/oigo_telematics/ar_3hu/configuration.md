---
slug: /oigo_telematics/ar_3hu/configuration
id: ar_3hu-configuration
sidebar_label: Configuration
title: Oigo Telematics - AR-3HU Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide to connect Oigo Telematics AR-3HU GPS tracker to Plaspy with server and command examples
keywords:
  - Oigo Telematics AR-3HU configuration
  - AR-3HU setup for Plaspy
  - Oigo AR-3HU server configuration
  - AR-3HU GPS tracker setup
  - Plaspy tracker configuration
  - GPS platform integration
  - vehicle tracking AR-3HU
  - AR-3HU AT commands
  - AR-3HU APN setup
  - fleet tracking configuration
---

# Oigo Telematics - AR-3HU Configuration

This page covers the public configuration context for using the Oigo Telematics AR-3HU with Plaspy. It collects the practical server settings and an example set of AT commands extracted from public device configuration content to help installers and integrators prepare the device for communication with Plaspy. Use this guide together with the official manufacturer documentation for device specific details.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when the device connects. Exact manufacturer-side setup steps can vary depending on firmware, hardware revision, installation method, and vendor configuration tools. The example commands on this page reflect a common AT command style configuration and include placeholders such as the APN that must be filled with service specific values.

## Configuration Overview

This configuration process prepares the AR-3HU to send location and event data to the Plaspy platform using the platform's shared server endpoint and port. The objective is to ensure reliable IP connectivity, correct APN and transport settings, and visible reporting in Plaspy.

- Configure the device APN and network parameters so it can reach the internet and Plaspy servers.
- Set the Plaspy server endpoint and port so the tracker reports to the correct destination.
- Choose and configure transport (UDP or TCP) if the device requires an explicit selection.
- Apply the configuration, restart the tracker if required, and confirm the device appears in Plaspy.
- Use the included AT command examples as a reference for devices that accept AT style configuration.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when a device connects
- All devices in Plaspy use the same port 8888 for reporting

## Typical Requirements Before Setup

- A powered and accessible AR-3HU unit with the ability to accept configuration (serial, Telnet, SMS, or vendor software as supported).
- An active data SIM and correct APN details for the mobile operator if using cellular data (the device supports 3G HSDPA).
- Access to the official manufacturer configuration method or software so settings are applied correctly.
- Knowledge of whether your installer workflow uses direct AT commands, SMS configuration, or the vendor tool.
- A stable network environment where the device can reach d.plaspy.com or 54.85.159.138 on port 8888.
- Credentials and permissions needed to restart or cycle power on the device during configuration.

## How This Tracker Connects to Plaspy

When configured for Plaspy, the AR-3HU sends periodic location updates and event reports to the shared Plaspy server endpoint on port 8888. Plaspy receives the incoming connections or datagrams and matches the device protocol automatically.

- The tracker is set to report to d.plaspy.com or directly to 54.85.159.138 on port 8888.
- The device may use either UDP or TCP transport depending on configuration and installer preference.
- Location updates and event alerts are delivered to Plaspy where they become visible in the platform.
- Plaspy automatically detects the tracker protocol so the device can connect without selecting a bespoke protocol in most cases.
- Use the platform to validate device visibility and event reporting after configuration.

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software for the AR-3HU (AT command console, vendor tool, or SMS method as supported).
2. Enter the Plaspy server address — use d.plaspy.com or the direct server IP 54.85.159.138 as required by the device configuration interface.
3. Set the destination port to 8888. Remember Plaspy uses port 8888 for all supported devices.
4. Choose the transport protocol (UDP or TCP) if the device requires a transport selection.
5. Configure APN and any SIM or network related settings so the device has data connectivity.
6. Apply or save the configuration and restart the device if required by the manufacturer procedure.
7. Validate that the device is reporting to Plaspy and visible in the platform; confirm event and location updates arrive as expected.

## Example Configuration Commands

The following AT commands are a public example for AR-3HU style configuration. These commands are presented in the same order as the provided source. Preserve placeholders and replace them with your operator specific values where required.

- AT+XRFD
- AT+XAPN=1"[apn]"
- AT+XIP="54.85.159.138",8888
- AT+XBUB=1
- AT+XBUBE=3,30
- AT+XCSW=600
- AT+XDDI=1000
- AT+XDHC=170,3
- AT+XDMES=7,90
- AT+XDMSD=50
- AT+XDMSS=7,10
- AT+XDMT=1
- AT+XDRI=3600,300
- AT+XDTS=0
- AT+XDTT=0
- AT+XGPL=3,60
- AT+XGPLP=4,10
- AT+XGPLT=300
- AT+XHB=0
- AT+XHBB=600
- AT+XIA=1,300
- AT+XIGM=2,5
- AT+XIGN=3
- AT+XIOD=A,1
- AT+XIOD=B,0
- AT+XIOD=C,1
- AT+XIOD=D,0
- AT+XIOE=A,0
- AT+XIOE=B,0
- AT+XIOE=C,2
- AT+XIOE=D,0
- AT+XIPC=1
- AT+XKA=2,60
- AT+XPRP=2
- AT+XPST=1,900
- AT+XPUP=1
- AT+XPWL=11.7,30
- AT+XPWLE=3
- AT+XPWM=0,0,1,1
- AT+XPWS=12.3,3600
- AT+XPWSE=3
- AT+XRLYE=3
- AT+XRPA=0
- AT+XRPF=1,1
- AT+XRPM=0000FFFF
- AT+XRPQ=3000
- AT+XRPSF=126
- AT+XRSTE=1
- AT+XRSTP=2,14500
- AT+XSMSD=""
- AT+XSMSS=""
- AT+XSPD=3,110,15
- AT+XTA=1,30
- AT+XVO=0
- AT+XVTO=0
- AT+XVTOE=5000
- AT+XRST=1
- AT+XRST=2

Fenced command block (preserve ordering for execution where order matters):

```
AT+XRFD
AT+XAPN=1"[apn]"
AT+XIP="54.85.159.138",8888
AT+XBUB=1
AT+XBUBE=3,30
AT+XCSW=600
AT+XDDI=1000
AT+XDHC=170,3
AT+XDMES=7,90
AT+XDMSD=50
AT+XDMSS=7,10
AT+XDMT=1
AT+XDRI=3600,300
AT+XDTS=0
AT+XDTT=0
AT+XGPL=3,60
AT+XGPLP=4,10
AT+XGPLT=300
AT+XHB=0
AT+XHBB=600
AT+XIA=1,300
AT+XIGM=2,5
AT+XIGN=3
AT+XIOD=A,1
AT+XIOD=B,0
AT+XIOD=C,1
AT+XIOD=D,0
AT+XIOE=A,0
AT+XIOE=B,0
AT+XIOE=C,2
AT+XIOE=D,0
AT+XIPC=1
AT+XKA=2,60
AT+XPRP=2
AT+XPST=1,900
AT+XPUP=1
AT+XPWL=11.7,30
AT+XPWLE=3
AT+XPWM=0,0,1,1
AT+XPWS=12.3,3600
AT+XPWSE=3
AT+XRLYE=3
AT+XRPA=0
AT+XRPF=1,1
AT+XRPM=0000FFFF
AT+XRPQ=3000
AT+XRPSF=126
AT+XRSTE=1
AT+XRSTP=2,14500
AT+XSMSD=""
AT+XSMSS=""
AT+XSPD=3,110,15
AT+XTA=1,30
AT+XVO=0
AT+XVTO=0
AT+XVTOE=5000
AT+XRST=1
AT+XRST=2
```

Notes on placeholders and reset commands:
- [apn] is a placeholder for the mobile operator APN and must be replaced with the correct APN string for the SIM card in use.
- The final AT+XRST=1 and AT+XRST=2 commands are shown as device restart commands in this example. Treat reset steps as optional or only when required by your setup process; follow manufacturer guidance.

## Configuration Notes

- Firmware and hardware revisions can change command availability and parameter behavior; confirm exact syntax with Oigo Telematics documentation for your device revision.
- The device example uses a direct IP in AT+XIP. You may alternatively configure the domain d.plaspy.com where supported by the device; both should target port 8888.
- Choose UDP or TCP according to installer preference and network conditions. Plaspy supports both and automatically detects the device protocol.
- APN, SIM, and network credentials differ by operator and must be entered correctly for cellular connectivity.
- Some manufacturers allow sending AT commands via SMS, serial console, or vendor software; use the officially supported method for your AR-3HU unit.

## Why Use Plaspy with This Configuration

Using the AR-3HU with Plaspy provides a straightforward way to add vehicle visibility, event reporting, and operational monitoring to your fleet management workflow. The AR-3HU's event report features and cellular connectivity make it suitable for organizations that need timely alerts and location updates, and Plaspy's shared server endpoint simplifies deployment across many devices.

To learn more about Plaspy and supported integrations visit https://www.plaspy.com. Verify the latest device specific setup methods and firmware details with the manufacturer at https://www.oigotelematics.com/ to ensure accuracy and up to date procedures.
