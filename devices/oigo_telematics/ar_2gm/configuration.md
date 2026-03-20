---
slug: /oigo_telematics/ar_2gm/configuration
id: ar_2gm-configuration
sidebar_label: Configuration
title: Oigo Telematics - AR-2GM Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for the Oigo Telematics AR-2GM tracker with Plaspy compatibility and practical setup steps
keywords:
  - Oigo Telematics AR-2GM
  - AR-2GM configuration
  - AR-2GM setup Plaspy
  - AR-2GM server configuration
  - Oigo AR-2GM tracking setup
  - Plaspy device configuration
  - GPS tracker configuration
  - vehicle tracking setup
  - fleet management tracker
  - AR series configuration
---

# Oigo Telematics - AR-2GM Configuration

This page covers the public configuration context for using the Oigo Telematics AR-2GM tracker with Plaspy. It focuses on the practical, publicly available settings and example commands that prepare the AR-2GM to report location and event data to Plaspy. Where manufacturer AT command examples are available they are included below as reference for technicians and integrators.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Exact steps on the manufacturer side can vary by firmware version, hardware revision, installation type, and the vendor configuration tool you use. The example AT command sequence included in this guide should be treated as public reference material that may require adaptation for your specific device and firmware.

## Configuration Overview

The goal of configuration is to prepare the AR-2GM for reliable communication with Plaspy and to validate that the device reports properly to the platform. The AR-2GM is a discreet GSM tracker intended for vehicle installations, and the public command list below shows how common parameters are set for server connectivity and reporting behavior.

- Configure the device to point to Plaspy's shared server endpoint so the tracker sends telemetry to Plaspy.
- Set the correct APN and network parameters for the installed SIM to ensure mobile connectivity.
- Choose and set the transport type if required by the device firmware, and set the Plaspy port.
- Tune heartbeat and reporting intervals so the device sends position and event reports at expected frequencies.
- Apply and save settings, then validate the tracker appears and reports in Plaspy.
- Use the included AT command examples as a starting point, and adapt where manufacturer tools or firmware require different syntax.

## Plaspy Server Settings

- server domain d.plaspy.com
- server IP 54.85.159.138
- port 8888
- transport support for UDP or TCP
- automatic protocol detection in Plaspy

Note: Plaspy uses the same port for all supported devices and automatically detects the tracker protocol so the tracker can use UDP or TCP as appropriate.

## Typical Requirements Before Setup

- A powered AR-2GM installed or connected to a bench power supply for configuration and testing.
- A working GSM SIM card with data enabled and the correct APN for your mobile operator.
- Access to the official Oigo Telematics configuration method or software, or a serial/sms interface that supports AT commands.
- The device IMEI or unique device identifier to register and validate the tracker in Plaspy.
- A Plaspy account or organizational access to confirm the device is visible after configuration.

## How This Tracker Connects to Plaspy

The AR-2GM is configured to send location updates and event reports to the Plaspy server endpoint so the device becomes visible in the Plaspy platform. Plaspy receives telemetry on the shared endpoint and makes the data available for monitoring, alerts, and reporting.

- The tracker is pointed at Plaspy using the server domain or IP and the shared port.
- The device sends periodic reports and event-triggered messages to Plaspy.
- Plaspy automatically detects the tracker protocol so the device can use UDP or TCP.
- Heartbeat and keepalive settings maintain the device session and availability in Plaspy.
- Event reports such as movement or geofence triggers are forwarded to Plaspy for alerting and history.

## Common Configuration Workflow

1. Access the official Oigo Telematics configuration method or software for the AR-2GM (manufacturer tool, serial console, or SMS-based setup as supported).
2. Enter the Plaspy server address either as server domain d.plaspy.com or server IP 54.85.159.138 in the device settings.
3. Set the server port to 8888.
4. Choose UDP or TCP if your firmware requires an explicit transport selection.
5. Configure the APN and any SIM or network parameters required by your mobile operator.
6. Apply or save the configuration and restart the device if the procedure requires a reboot.
7. Validate that the device reports to Plaspy and appears in your Plaspy account or organizational view.

If you are using the example AT command sequence shown below, run those commands in the order provided or import them through the manufacturer tool when order matters.

## Example Configuration Commands

The AR-2GM public command sequence below is provided as an example extracted from public manufacturer content. These AT commands are commonly applied via the manufacturer configuration tool, serial interface, or SMS depending on your device. Preserve the order where command order is important.

Key points:
- AT+XAPN includes a placeholder [apn]. Replace [apn] with the APN for your mobile operator.
- AT+XIP specifies the Plaspy server IP and port.
- The final AT+XRST commands are device restarts; treat them as optional or as part of initial setup where appropriate.

- Example AT command sequence

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

Placeholders and notes:
- [apn] is a placeholder for the mobile network APN string required by the installed SIM. Replace this with your operator APN.
- The AT+XIP command above points the device to Plaspy using the public server IP and port. You can use the domain d.plaspy.com in manufacturer tools that accept a domain string instead of an IP.
- AT+XRST commands are device restart operations shown in the sequence; use them as part of initial configuration or when the manufacturer recommends a restart to apply settings.

## Configuration Notes

- Firmware and hardware revisions may change AT command names, parameter formats, or supported features. Verify commands on your device firmware before applying them.
- Select UDP or TCP according to your installation and firmware support. Plaspy accepts both and auto-detects the protocol, but device-side behavior may differ.
- Ensure the SIM APN, data plan, and radio registration are verified before attempting to register the device in Plaspy.
- Some configuration steps can be performed by SMS or via a manufacturer desktop tool depending on the AR-2GM firmware and the installer toolkit provided by Oigo Telematics.
- Keep a backup of current device settings and a record of commands you apply so you can roll back if required.

## Why Use Plaspy with This Configuration

Using the AR-2GM with Plaspy provides a straightforward way to bring discreet vehicle tracking into a fleet visibility and monitoring workflow. With the AR-2GM configured to report to the Plaspy server, organizations gain access to centralized tracking, event-driven alerts, and the operational oversight needed for fleet management and recovery workflows.

To learn more about Plaspy and how this configuration integrates with the platform visit https://www.plaspy.com. For the latest device specific setup details, firmware notes, and manufacturer instructions verify the official Oigo Telematics documentation at https://www.oigotelematics.com/ because manufacturer specifications and configuration methods can change over time.
