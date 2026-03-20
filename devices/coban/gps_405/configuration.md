---
slug: /coban/gps_405/configuration
id: gps_405-configuration
sidebar_label: Configuration
title: Coban - GPS-405 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Coban GPS-405 showing Plaspy server settings SMS commands and setup notes
keywords:
  - Coban GPS-405 configuration
  - Coban GPS-405 setup
  - Coban GPS-405 Plaspy
  - GPS-405 server configuration
  - GPS-405 tracker setup
  - Coban vehicle tracker configuration
  - GPS tracker setup Plaspy
  - Coban GPS platform setup
  - GPS-405 SMS configuration
  - vehicle tracking GPS-405
---

# Coban - GPS-405 Configuration

This page documents the public configuration context for using the Coban GPS-405 with Plaspy. It explains the shared Plaspy server settings you must apply, shows the SMS configuration commands published for this model, and provides practical setup guidance to get the GPS-405 reporting to Plaspy for location and event visibility.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, so the same Plaspy endpoint and port are used for device connectivity. Manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and the vendor tools used. The GPS-405 supports SMS based configuration in public documentation and this guide incorporates those commands and placeholders where applicable.

## Configuration Overview

The goal of configuration is to prepare the GPS-405 to communicate reliably with the Plaspy server so the device appears and reports correctly in the Plaspy platform. The public Coban SMS commands for this model allow you to set APN credentials, point the device to Plaspy, select transport mode, and tune heartbeat or fix intervals.

- Point the GPS-405 to the Plaspy server domain or IP so GPRS reporting is sent to Plaspy.
- Configure APN and APN credentials so the device has internet access for GPRS reporting.
- Select UDP or TCP transport and set the shared Plaspy port so data is accepted by the platform.
- Validate connectivity and confirm the device reports to Plaspy using the device check command.
- Optionally adjust heartbeat and tracking intervals to suit installation and reporting needs.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

Note that all devices in Plaspy use the same port and the platform performs automatic protocol detection so you can use the same port 8888 for the GPS-405.

## Typical Requirements Before Setup

- A powered and installed Coban GPS-405 accessible to send configuration SMS commands.
- A working SIM card in the tracker with a mobile data plan and the correct APN for the operator.
- A way to send SMS messages to the device for SMS based configuration if you choose that method.
- The device default password if required for commands; public documentation for GPS-405 shows a default password of 123456.
- Access to the official Coban configuration instructions or vendor tool to confirm firmware specific command syntax.
- Patience to test and validate connectivity after changing settings, since firmware differences may affect behavior.

## How This Tracker Connects to Plaspy

The GPS-405 is configured to report its location and device status to Plaspy by sending GPRS traffic to the Plaspy server endpoint and port. In the public SMS command set, you set the server IP or domain and the port, then configure GPRS mode and heartbeat intervals so the device posts updates to Plaspy.

- The device is pointed at d.plaspy.com or the IP 54.85.159.138 in the server configuration command.
- Port 8888 is used as the shared Plaspy port for all devices.
- You can choose UDP or TCP transport on the device; Plaspy accepts either and auto detects the protocol.
- The tracker sends periodic position and status packets to Plaspy based on the configured fix or heartbeat interval.
- Plaspy parses incoming data and maps it to the GPS-405 device for visibility, alerts, and operational monitoring.

## Common Configuration Workflow

1. Access the official Coban configuration method for your device, typically SMS commands or vendor configuration tools, and confirm the device password and firmware behavior.
2. Set the device APN and APN credentials using the SMS commands or vendor tool so the tracker can establish a GPRS data session.
3. Enter the Plaspy server address either as the domain d.plaspy.com or the IP 54.85.159.138 and set port 8888.
4. Choose the transport type UDP or TCP on the device if the tracker requires an explicit selection.
5. Apply or save the configuration on the tracker and, if needed, restart the device to ensure settings take effect.
6. Validate the device reports to Plaspy by using the device check command or by confirming visibility in the Plaspy platform.
7. Adjust heartbeat and fix intervals as appropriate and revalidate connectivity and reporting.

## Example Configuration Commands

The GPS-405 public configuration uses SMS commands. The following commands are taken from Coban public documentation and show the order and syntax used for typical setup. The device default password in these examples is 123456.

- Factory reset (optional initial step)
```text
begin123456
```

- Set the time zone to UTC 0
```text
time zone123456 0
```

- Set the operator APN
```text
apn123456 {{apn}}
```
  - Placeholder {{apn}} should be replaced with the mobile operator APN string for your SIM.

- Set the APN username and password
```text
up123456 {{apnu}} {{apnp}}
```
  - Placeholders {{apnu}} and {{apnp}} are the APN username and password and can be left empty if the operator does not require them.

- Set the GPRS server to the Plaspy IP and port
```text
adminip123456 54.85.159.138 8888
```
  - You can also use the domain d.plaspy.com in place of the IP if supported by your firmware.

- Set update interval example
```text
fix060s060s***n123456
```
  - This command example controls fix intervals; consult manufacturer docs for exact format and meaning.

- Switch to GPRS mode and select transport
```text
gprs123456,1,1
```
  - Or simply:
```text
gprs123456
```
  - Use the variant that matches your firmware. The first example may indicate explicit transport selection on some firmware.

- Check current settings
```text
check123456
```

- Enable detailed protocol reporting or sensor status improvement
```text
protocol123456 18
```

Follow the exact SMS formatting required by your firmware and confirm the device responds to each command before proceeding to the next step.

## Configuration Notes

- Firmware and hardware revisions can change command availability and syntax; always confirm with the device firmware notes or Coban documentation.
- SMS based configuration is commonly used for the GPS-405 and is shown above; vendor configuration tools may offer alternate methods.
- When setting APN values, use the correct operator APN, username, and password; placeholders {{apn}}, {{apnu}}, and {{apnp}} are used above and must be replaced with operator values.
- Choose UDP or TCP based on installation needs; Plaspy accepts both and will automatically detect the incoming protocol.
- The default password 123456 is used in the public command examples; if your device password has been changed, use the current device password.

## Why Use Plaspy with This Configuration

Using the Coban GPS-405 configured to report to Plaspy gives organizations a straightforward way to consolidate vehicle location and status into a single platform for monitoring, alerts, and operational oversight. The public SMS commands make it practical to deploy and point devices to Plaspy quickly, while the platform’s automatic protocol detection reduces configuration complexity.

To learn more about Plaspy and how it handles device connectivity, visit https://www.plaspy.com. For the most current device specific setup methods, firmware behavior, and command syntax verify details on the manufacturer website https://www.coban.net/.
