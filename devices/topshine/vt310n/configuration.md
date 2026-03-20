---
slug: /topshine/vt310n/configuration
id: vt310n-configuration
sidebar_label: Configuration
title: TopShine - VT310N Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for TopShine VT310N showing Plaspy server settings, SMS commands, and practical steps to integrate the tracker with Plaspy
keywords:
  - TopShine VT310N
  - VT310N configuration
  - TopShine tracker setup
  - Plaspy configuration
  - GPS tracker configuration
  - vehicle tracking setup
  - server configuration for VT310N
  - GPRS tracker setup
  - fleet management tracker
  - TopShine server setup
---

# TopShine - VT310N Configuration

This page describes the public configuration context for using the TopShine VT310N tracker with the Plaspy platform. It focuses on the practical server settings, SMS commands exposed by the device configuration flow, and the steps you can follow to register and report the device to Plaspy for live tracking and telemetry.

Plaspy uses shared server settings for supported trackers and automatically detects the device protocol when the tracker connects. Manufacturer setup steps can vary by firmware version, hardware revision, installation method, and vendor tools, so this page highlights the common public configuration actions while encouraging you to verify exact steps with the manufacturer where needed.

## Configuration Overview

The goal of configuring the VT310N for Plaspy is to prepare the device to send position and event data to the shared Plaspy endpoint so vehicles appear correctly on Plaspy maps and reports. The public configuration commonly performed here uses SMS commands or the vendor tool to set APN, server, transport, and reporting parameters.

- Configure the device APN and credentials so it can access GPRS data services.
- Point the device to the Plaspy server endpoint so telemetry is forwarded to Plaspy.
- Select the transport mode (UDP or TCP) and set the shared Plaspy port used by all devices.
- Verify device identity using the IMEI based device ID and confirm the tracker reports to Plaspy.
- Enable periodic reporting interval so position updates appear in Plaspy live maps.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on the device if it requires a selection
- Plaspy automatically detects the tracker protocol when the device connects
- Note that Plaspy uses the same port 8888 for all supported devices

## Typical Requirements Before Setup

- A powered VT310N with access to the device SIM card slot and a SIM that has a data plan and SMS capability.
- The device IMEI available for use as the tracker identifier and for manufacturer commands.
- Ability to send SMS commands from a phone number authorized to configure the device or access to the manufacturer's configuration tool.
- The correct APN, and optional APN username and password for the mobile operator that services the SIM.
- Knowledge of whether the device firmware requires UDP or TCP selection for GPRS reporting.

## How This Tracker Connects to Plaspy

The VT310N is configured to report GNSS and sensor data over GPRS to the shared Plaspy server endpoint and port. Once the APN and server settings are applied, the device sends periodic position and event messages so Plaspy can render live location, alerts, and history.

- The tracker is set to use the Plaspy server at d.plaspy.com or 54.85.159.138 on port 8888.
- Transport can be configured as UDP or TCP depending on the device option; Plaspy will detect the protocol automatically.
- Periodic position updates are sent to Plaspy so live maps and historical playback work in the platform.
- Alarm events and sensor telemetry are forwarded to Plaspy for event handling and notifications.
- If GPRS is not available, the device may use its data logger to store positions and upload them when connectivity is restored.

## Common Configuration Workflow

1. Access the official TopShine configuration method for the VT310N such as SMS commands or the vendor configuration tool supplied by the manufacturer.
2. Prepare device identifiers and operator details such as the device IMEI and the APN plus optional APN username and password.
3. Enter the Plaspy server as either d.plaspy.com or the IP 54.85.159.138 depending on the configuration method you use.
4. Set the port to 8888 and choose UDP or TCP on the device if a transport selection is required.
5. Apply or save the configuration changes and restart the device if the firmware requires a reboot to apply settings.
6. Validate that the device reports to Plaspy by checking device status in Plaspy and confirming periodic position updates and events are visible.

## Example Configuration Commands

The VT310N supports SMS based configuration. The manufacturer example commands below use the device default password 000000. Replace placeholders as noted and send each command as an SMS from an authorized phone number. The commands are presented in the recommended order.

- Optional initial reset to factory settings (use only when required as part of initial setup)
```text
W000000,990,099###
```

- Set the device ID using the first 14 digits of the IMEI
```text
W000000,010,<14-digit-device-id>
```
Replace \<14-digit-device-id> with the first 14 digits of the device IMEI. Plaspy uses the full 15 digit IMEI as the device identifier in the platform, so confirm IMEI registration in Plaspy after configuring the 14 digit ID if required by your provisioning flow.

- Set the operator APN (basic and with optional credentials)
```text
W000000,011,[apn]
```
or if the APN requires username and password:
```text
W000000,011,[apn],[apnu],[apnp]
```
Explanation of placeholders:
- [apn] is the mobile network access point name for the SIM.
- [apnu] is the APN username if required.
- [apnp] is the APN password if required.

- Set the GPRS server to Plaspy by IP and port
```text
W000000,012,54.85.159.138,8888
```
This command points the VT310N to the Plaspy server IP and port. You can use d.plaspy.com in some vendor tools, but the device SMS command sets the server by IP.

- Switch the device to GPRS reporting mode
```text
W000000,013,2
```

- Set the location update interval (example value used in vendor example)
```text
W000000,014,6
```
Check vendor documentation for what the numeric interval corresponds to in seconds or minutes on your firmware.

- Query IMEI for verification
```text
W000000,601
```
This verification command returns the IMEI so you can confirm the device identity before or after configuration.

Important notes for SMS commands:
- The default device password in the manufacturer example is 000000. If the device password has been changed, use the current password in place of 000000.
- Preserve placeholders exactly when preparing commands and replace them with your operator values or IMEI-derived device id.

## Configuration Notes

- Firmware differences and hardware revisions can change command formats and parameter meanings; always confirm the command syntax against the manufacturer documentation for your device firmware.
- The VT310N allows transport selection between UDP and TCP in some configuration flows; choose the transport required by your provisioning and note that Plaspy will auto detect the incoming protocol when the device connects.
- SMS based setup is commonly supported for field installations; if using a vendor PC tool or USB configuration method, the same server and port values (d.plaspy.com or 54.85.159.138 and port 8888) should be used.
- When using the IP based server command, the example uses the Plaspy server IP. Some installers prefer to use d.plaspy.com if the configuration tool resolves DNS.
- Confirm APN and credentials with the mobile operator before attempting GPRS activation to avoid connectivity delays.

## Why Use Plaspy with This Configuration

Configuring the VT310N to report to Plaspy provides fleet operators with consolidated visibility into vehicle location, telemetry, and event alerts on one platform. Using the shared Plaspy endpoint simplifies deployment because all Plaspy devices use port 8888 and the platform automatically detects the tracker protocol, reducing per-device configuration complexity.

To learn more about Plaspy and how to manage trackers at scale visit https://www.plaspy.com. For the latest device specific configuration steps, firmware notes, and accessory information verify the current manufacturer documentation at https://www.gztopshine.com/ since setup methods and firmware behavior can change over time.
