---
slug: /coban/bn_403c/configuration
id: bn_403c-configuration
sidebar_label: Configuration
title: Coban - BN-403C Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Coban BN 403C showing Plaspy server settings and SMS configuration commands
keywords:
  - Coban BN 403C configuration
  - BN 403C setup Plaspy
  - Coban tracker configuration
  - BN 403C server configuration
  - BN 403C GPS tracker setup
  - BN 403C SMS commands
  - Plaspy tracker configuration
  - vehicle tracker BN 403C
  - BN 403C telemetry setup
  - Coban GPS platform setup
---

# Coban - BN-403C Configuration

This page describes the public configuration context for using the Coban BN-403C tracker with Plaspy. It covers the server settings Plaspy expects, the common prerequisites for deployment, and the practical SMS commands published for the BN-403C where available. Use this guide to prepare the device and confirm connectivity to Plaspy before registering the device in the platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when the device connects. Manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools, so always reconcile these public instructions with the BN-403C vendor documentation and any installer procedures you use.

## Configuration Overview

This configuration process prepares the BN-403C to communicate with Plaspy and to report location, alarms, and telemetry reliably. The public configuration steps primarily set the device APN, transport mode, server endpoint, reporting interval, and optional protocol flags using SMS commands or the manufacturer tool.

- Set the device APN and optional APN credentials so cellular data is available.
- Configure the device to report to the Plaspy server endpoint and port.
- Select the transport mode (UDP or TCP) as required by network conditions.
- Define reporting intervals and enable protocol features needed for telemetry and sensor reporting.
- Verify settings and confirm the device is visible and reporting in Plaspy.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when the device connects
- Note that Plaspy uses the same port for all supported devices

## Typical Requirements Before Setup

- A powered BN-403C with vehicle power or backup battery connected and functional
- An active cellular SIM provisioned for data using the operator APN
- SMS access to the device for applying SMS based configuration commands if using SMS setup
- Access to the manufacturer configuration method or Bluetooth tool for local configuration if preferred
- Knowledge of the APN, APN username, and APN password for the chosen mobile operator
- A way to validate the device on the Plaspy platform after configuration

## How This Tracker Connects to Plaspy

The BN-403C sends GNSS positions, event notifications, and telemetry to Plaspy by reporting to the shared Plaspy server endpoint and port. Plaspy ingests those messages and maps them to the device instance so you can view live location, alerts, and history in the platform.

- The device is configured to report to d.plaspy.com or directly to 54.85.159.138 on port 8888
- Transport can be UDP or TCP; choose the transport that works best for the network and device firmware
- Plaspy automatically detects the tracker protocol when the device connects to the shared port
- Position updates, alarms, and sensor events are forwarded to Plaspy for live monitoring and notifications
- After configuration the device should show as reporting in Plaspy and populate location and event data

## Common Configuration Workflow

1. Access the official Coban configuration method you plan to use such as SMS commands or the Coban Bluetooth/software tool.
2. Enter the Plaspy server as d.plaspy.com or the server IP 54.85.159.138 in the device GPRS or server configuration field.
3. Set the device port to 8888 which is the shared port Plaspy uses for all devices.
4. Choose UDP or TCP as the transport if the device requires an explicit transport selection.
5. Apply or save the configuration on the device using the manufacturer method (send SMS, use Bluetooth, or use a configuration app).
6. Restart or power cycle the device if required by the tracker firmware to activate new settings.
7. Validate that the device reports to Plaspy by checking device activity and position updates in the platform.

## Example Configuration Commands

The BN-403C supports SMS based configuration. The manufacturer published these public SMS commands. The default device password shown in the commands is 123456. Replace placeholders and password as required for your device.

- Optional initial factory reset (use only if you need to restore factory defaults)
```sms
begin123456
```

- Set the time zone to UTC 0
```sms
time zone123456 0
```

- Set the operator APN
```sms
apn123456 [apn]
```
Note: [apn] is a placeholder for your mobile operator APN string.

- Set the APN username and password
```sms
up123456 [apnu] [apnp]
```
Note: [apnu] and [apnp] are placeholders for APN username and APN password. Leave blank if not required.

- Set the GPRS server to the Plaspy server IP and port
```sms
adminip123456 54.85.159.138 8888
```
This configures the device to report directly to Plaspy on port 8888. You can alternatively use d.plaspy.com where the device supports domain names.

- Set the position update interval
```sms
fix060s060s***n123456
```
This is a published example reporting control command. Keep the exact syntax as provided by the manufacturer.

- Switch to GPRS mode and select transport to UDP or TCP
```sms
gprs123456,1,1
```
or, if the device supports a simpler command
```sms
gprs123456
```
These variants configure the device to use GPRS for data reporting. Consult your firmware notes for the correct parameter order if required.

- Verify current settings
```sms
check123456
```

- Enable fuel sensor status or improved digital sensor transmission
```sms
protocol123456 18
```

When sending SMS commands:
- Keep the device password correct; 123456 is the default in the public examples and should be changed if possible.
- Replace placeholders [apn], [apnu], and [apnp] with your operator values.
- Use domain d.plaspy.com or the IP 54.85.159.138 and port 8888 as shown.

## Configuration Notes

- Firmware revisions and vendor tools can change command syntax or available parameters; verify commands for your device firmware before mass deployment.
- Choose UDP or TCP based on operator network stability and the behavior you observe; both are supported by Plaspy on port 8888.
- SMS based setup is a common public method for this model, but Bluetooth or manufacturer software may be available and can be more convenient for some installers.
- The default password 123456 appears in public command examples; change device credentials where supported and document any password changes.
- Plaspy uses the same port for all devices and automatically detects the protocol, so ensure the server and port are consistent across devices to simplify management.

## Why Use Plaspy with This Configuration

Using the BN-403C with Plaspy provides a practical combination for organizations that need continuous vehicle visibility, alarm handling, and remote control. The BN-403C's transport options and backup battery help maintain reporting across variable network and power conditions, while Plaspy centralizes incoming telemetry for live mapping, alerting, and operational workflows.

Learn more about Plaspy and how it can manage devices like the BN-403C on the main website https://www.plaspy.com. For the latest device specific setup details, firmware notes, and manufacturer instructions verify the official Coban documentation at https://www.coban.net/ as vendor procedures and firmware behavior can change over time.
