---
slug: /topshine/2fd_100/configuration
id: 2fd_100-configuration
sidebar_label: Configuration
title: TopShine - 2FD-100 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for TopShine 2FD-100 and Plaspy server settings for reliable fleet tracking
keywords:
  - TopShine 2FD-100 configuration
  - TopShine 2FD-100 setup
  - 2FD-100 Plaspy configuration
  - 2FD-100 server configuration
  - Plaspy tracker setup
  - TopShine GPS tracker configuration
  - 2FD-100 GPS platform setup
  - vehicle tracking configuration
  - fleet management tracker setup
  - GPS tracker SMS configuration
---

# TopShine - 2FD-100 Configuration

This page documents the public configuration context for using the TopShine 2FD-100 tracker with Plaspy. It collects the practical server settings, SMS commands, and general workflow you will need to prepare the device for reporting to Plaspy while keeping the guidance generic and manufacturer centric. Use this guide together with the device manual and TopShine tools for a complete deployment.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when the device connects. Exact manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and the vendor configuration tools used by installers. The 2FD-100 supports SMS based configuration and GPRS reporting, and the commands below reflect public setup examples provided by TopShine.

## Configuration Overview

The purpose of configuring a 2FD-100 for Plaspy is to direct the device to the Plaspy server endpoint and confirm that periodic position and alarm reports reach the platform. Configuration typically sets the device identity, APN for mobile data, the GPRS server endpoint and port, and the device reporting behavior.

- Point the tracker to Plaspy by setting the GPRS server address and port
- Configure a valid mobile APN so the tracker can use GPRS or 4G data
- Set the device identifier so Plaspy can match the device to your fleet
- Verify connectivity and that position updates arrive in Plaspy
- Optionally use SMS commands for initial provisioning where supported

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Automatic protocol detection in Plaspy

Note that Plaspy uses the same port for all supported devices and automatically detects the tracker protocol when a device connects.

## Typical Requirements Before Setup

- A powered and properly installed 2FD-100 with access to the vehicle OBD2 or wiring harness as installed
- An active cellular SIM with data enabled and the correct APN for the mobile operator
- Access to the TopShine manufacturer configuration method such as SMS commands or the official TopShine configuration tool
- The device IMEI available for identity configuration and platform registration
- Knowledge of the device SMS password if SMS provisioning is used (default password shown below is provided with the public commands)
- A Plaspy account or administrator to verify device visibility after provisioning

## How This Tracker Connects to Plaspy

Once configured, the 2FD-100 will use its cellular data connection to open a session to Plaspy and send GPS positions, alarms, and input states. The tracker is directed to the shared Plaspy endpoint and port so Plaspy can receive telemetry and automatically identify the device protocol.

- The device is pointed at the Plaspy server endpoint (d.plaspy.com or 54.85.159.138) and port 8888
- Location updates and alarm events are sent over the chosen transport (UDP or TCP)
- Plaspy automatically detects the tracker protocol and processes incoming reports
- The device IMEI or configured device id is used to associate reports with your fleet record
- Platform visibility includes live position updates and alarm reporting once the device is successfully connected

## Common Configuration Workflow

1. Access the official TopShine configuration method for the 2FD-100 (SMS provisioning or the TopShine configuration tool).
2. Enter the Plaspy server address using either d.plaspy.com or the Plaspy server IP 54.85.159.138.
3. Set the port to 8888 (Plaspy uses the same port for all devices).
4. Choose UDP or TCP if the device firmware requires a transport selection.
5. Apply or save the configuration on the device and, if required, restart the device to start a new GPRS session.
6. Validate that the 2FD-100 is reporting to Plaspy by confirming the device appears and sends location updates in your Plaspy instance.
7. Adjust reporting intervals, alarms, and inputs as needed after basic connectivity is confirmed.

## Example Configuration Commands

The TopShine 2FD-100 can be configured by sending SMS commands to the device. The examples below are taken from public TopShine configuration content. The sample device SMS password used in these commands is 000000 which is the device default in the published examples. Preserve placeholders when sending commands and replace IMEI and APN placeholders with your actual values.

Note: The reset command is optional and typically used when you want to restore factory defaults before provisioning.

1. Reset to factory settings (optional initial reset)
```
W000000,990,099###
```

2. Set the device Id
- Use the first 14 digits from the IMEI for the device Id when the device requires a 14 digit id. TopShine notes that Plaspy uses the full 15 digit IMEI as the platform identifier.
- Replace <IMEI14> with the first 14 digits of your device IMEI.
```
W000000,010,<IMEI14>
```

3. Set the operator APN
- Replace {{apn}} with your operator APN.
- Optional placeholders {{apnu}} and {{apnp}} represent APN username and APN password if required by your carrier.
```
W000000,011,{{apn}},{{apnu}},{{apnp}}
```
(If your operator does not require username or password, leave {{apnu}} and {{apnp}} empty or omit them according to device syntax.)

4. Set the GPRS server to Plaspy
- This command points the device to the Plaspy server IP and port. Plaspy also accepts connections to d.plaspy.com; use the IP or domain per device capability.
```
W000000,012,54.85.159.138,8888
```

5. Switch to GPRS mode
```
W000000,013,2
```

6. Set the update interval
- Example sets periodic reporting interval code to 6 as used in public guidance. Confirm interval semantics in your device manual.
```
W000000,014,6
```

7. Get device IMEI (verification)
```
W000000,601
```

Keep the commands in this order during initial provisioning to ensure the device ID, APN, and server are set before switching to GPRS mode.

## Configuration Notes

- SMS based provisioning is shown in the public TopShine guidance and is a common method for initial setup; manufacturer software tools or field configuration tools may also be available.
- Firmware versions and hardware revisions can change command syntax and available options; always verify command format against the device manual for your firmware.
- Choose TCP or UDP according to device support and network conditions; Plaspy accepts both and will automatically detect the protocol used by the tracker.
- Plaspy uses the same port 8888 for all supported devices to simplify provisioning and platform routing.
- Preserve placeholders such as {{apn}}, {{apnu}}, {{apnp}} when preparing SMS commands and replace them with operator supplied values as needed.

## Why Use Plaspy with This Configuration

Configuring the TopShine 2FD-100 to report to Plaspy gives fleet managers and security operators a centralized view of vehicle location, alarms, and operational state alongside other fleet telemetry. The combination of the 2FD-100 hardware capabilities and Plaspy platform features supports live tracking, event alerts, and remote management actions that help streamline operations and improve vehicle security.

Learn more about Plaspy on the main website https://www.plaspy.com and verify device specific setup methods and the latest firmware details on the manufacturer site https://www.gztopshine.com/. Manufacturer specifications and configuration methods can change over time so confirm the current procedures on the official TopShine documentation.
