---
slug: /coban/gps109/configuration
id: gps109-configuration
sidebar_label: Configuration
title: Coban - GPS109 Configuration
sidebar_class_name: menu_item_tracker
description: Public setup guide for Coban GPS109 tracker configuration and Plaspy compatibility including server settings SMS commands and APN placeholders
keywords:
  - Coban GPS109 configuration
  - Coban GPS109 setup
  - Coban GPS109 server configuration
  - Plaspy GPS tracker configuration
  - GPS109 GPRS setup
  - vehicle tracking configuration
  - GPS tracker setup guide
  - Coban GPS109 APN settings
  - GPS109 SMS commands
  - fleet management tracker setup
---

# Coban - GPS109 Configuration

This page covers the public configuration context for using the Coban GPS109 tracker with Plaspy. It collects the practical server settings and example SMS commands that are commonly used to prepare the GPS109 for reporting location and device data to the Plaspy platform. Use this information to align device-side settings with Plaspy server endpoints and validate connectivity before adding the device to the fleet.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer-side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. The GPS109 supports SMS and GPRS configuration methods; where examples are shown here they reflect publicly available SMS commands. Always confirm device-specific details with the manufacturer documentation when needed.

## Configuration Overview

The configuration process prepares the GPS109 to communicate reliably with Plaspy and to report location and event data over the mobile network. For this tracker the typical work involves setting APN and credentials, pointing the device to the Plaspy server, choosing the transport mode, and confirming reporting intervals.

- Set the mobile operator APN and optional APN username and password so the device can use GPRS.
- Configure the device to report to the Plaspy server endpoint and port so data reaches the platform.
- Choose UDP or TCP transport on the device if a transport selection is required by firmware.
- Adjust reporting interval and tracking mode to match your monitoring needs.
- Validate the device is visible in Plaspy after saving settings and restarting the unit.

## Plaspy Server Settings

- Server domain d.plaspy.com should be used when configuring DNS capable workflows.
- Server IP 54.85.159.138 is the Plaspy endpoint reachable over the mobile network.
- Port 8888 is the Plaspy listening port and is used by all tracked devices in Plaspy.
- Transport support for UDP or TCP is available; configure the device for UDP or TCP as required by firmware.
- Plaspy automatically detects the tracker protocol so the platform can accept data from supported trackers without per-device protocol selection.

## Typical Requirements Before Setup

- A charged GPS109 device with working power supply or internal battery.
- A SIM card with active data or GPRS service and correct APN settings for the mobile operator.
- Ability to send and receive SMS from the installer phone if using SMS-based configuration commands.
- Access to the official Coban configuration method such as SMS commands or vendor software.
- Basic information: APN, APN username, APN password, and the Plaspy server settings shown above.
- A plan for testing: an area with GSM coverage and a way to validate the device shows up in Plaspy.

## How This Tracker Connects to Plaspy

When configured, the GPS109 uses the mobile operator GPRS connection to send position and device messages to Plaspy. The device is set to the Plaspy server endpoint and port so the platform can ingest reports and present them in the fleet interface.

- The tracker is pointed at the Plaspy server using the server domain d.plaspy.com or the server IP 54.85.159.138.
- Data is sent to port 8888 on the Plaspy server; Plaspy uses the same port for all supported devices.
- The device can use either UDP or TCP as its transport depending on firmware settings.
- Plaspy automatically detects the tracker protocol so once data arrives on the shared port the platform processes it accordingly.
- Reporting intervals and tracking modes determine how frequently location updates arrive in Plaspy.

## Common Configuration Workflow

1. Access the official Coban configuration method or software, or prepare to send SMS commands from an authorized phone.
2. Set the device APN and APN credentials so it can connect to the mobile operator GPRS network.
3. Enter the Plaspy server by using either d.plaspy.com or 54.85.159.138 as the GPRS server address.
4. Set the server port to 8888 in the device configuration.
5. Choose UDP or TCP if the device requires you to select a transport mode.
6. Apply or save the configuration on the tracker and restart the device if required by the device or firmware.
7. Validate that the device reports to Plaspy and appears as active in the platform.

## Example Configuration Commands

The GPS109 supports SMS-based configuration. The commands below are the publicly available SMS commands commonly used to configure the device. The default device password shown in these commands is 123456. Keep placeholders as shown and replace them with your actual APN and credentials.

- Factory reset (optional, use only when required for initial setup):
```
begin123456
```

- Set time zone to UTC+0:
```
time zone123456 0
```

- Set the operator APN (replace [apn] with your operator APN):
```
apn123456 [apn]
```

- Set the APN username and password (replace [apnu] and [apnp] with your operator credentials):
```
up123456 [apnu] [apnp]
```

- Set the GPRS server to the Plaspy IP and port:
```
adminip123456 54.85.159.138 8888
```

- Set update interval (example pattern provided by device; adapt as needed per firmware):
```
fix060s060s***n123456
```

- Switch to GPRS mode and select transport (example variants to enable GPRS and choose UDP or TCP depending on firmware):
```
gprs123456,1,1
```
or, if the device accepts the shorter form:
```
gprs123456
```

- Check current settings:
```
check123456
```

- Enable fuel sensor status or enhanced digital sensor reporting (example protocol switch):
```
protocol123456 18
```

Notes on placeholders and the password:
- The default SMS password used above is 123456. If you have changed the password, substitute your device password in every command.
- [apn] is the mobile operator APN string. [apnu] and [apnp] are the APN username and password when required by the operator. Do not include the curly braces when sending actual SMS content.

## Configuration Notes

- Firmware and hardware revisions can change command syntax and available options; consult the device manual for exact syntax if a command does not behave as expected.
- The GPS109 supports SMS-based configuration as shown; vendor tools or USB/serial configuration may also be available depending on the model revision and vendor software.
- Choose UDP or TCP according to your operational needs; Plaspy accepts both and automatically detects the incoming protocol on port 8888.
- Use the server domain d.plaspy.com when DNS is preferred, or use the Plaspy server IP 54.85.159.138 when a numeric address is required.
- Always verify APN settings and ensure the SIM has data/GPRS enabled before troubleshooting server connectivity.

## Why Use Plaspy with This Configuration

Using the Coban GPS109 configured to report to Plaspy gives organizations a straightforward path to integrate a reliable GPRS tracker into a centralized fleet management platform. With the shared Plaspy server settings and automatic protocol detection, the GPS109 can be prepared to send location and event data to Plaspy using familiar APN and SMS configuration flows.

To learn more about Plaspy and how it handles device onboarding and fleet visibility visit https://www.plaspy.com. For the latest device specific commands, firmware notes, and manufacturer support information always verify current details on the official Coban website https://www.coban.net/.
