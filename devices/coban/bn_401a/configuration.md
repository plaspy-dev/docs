---
slug: /coban/bn_401a/configuration
id: bn_401a-configuration
sidebar_label: Configuration
title: Coban - BN-401A Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Coban BN-401A and Plaspy compatibility with practical server settings and SMS commands
keywords:
  - Coban BN-401A configuration
  - BN-401A setup Plaspy
  - Coban tracker server configuration
  - BN-401A SMS commands
  - motorcycle GPS tracker setup
  - Plaspy tracker configuration
  - GNSS tracker integration guide
  - BN-401A GPRS setup
  - vehicle tracking platform configuration
  - Coban BN 401A manual
---

# Coban - BN-401A Configuration

This page covers the public configuration context for using the Coban BN-401A tracker with Plaspy. It compiles the practical server settings, setup workflow and publicly available SMS commands commonly used to prepare the device for live tracking and event reporting to Plaspy. The guidance below focuses on information you can apply directly when integrating the BN-401A into a Plaspy fleet.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type and vendor configuration tools. The BN-401A supports SMS configuration and local Bluetooth setup; where public SMS commands exist they are shown below with placeholders preserved for operator values such as APN credentials.

## Configuration Overview

Preparing the BN-401A for Plaspy integration ensures the device reliably delivers position and event data to the platform and appears correctly in your fleet. The public configuration steps typically set network access, the GPRS server endpoint and reporting behavior so Plaspy can receive and interpret messages.

- Configure the device to use Plaspy server settings so telemetry and alarms reach the platform.
- Set the operator APN and credentials so the tracker has mobile data connectivity for GPRS reporting.
- Define the GPRS server endpoint and port to point the tracker at Plaspy (domain or IP).
- Select transport mode (UDP or TCP) and configure reporting intervals to balance update frequency and data use.
- Validate connectivity and reporting using the device verification commands or Plaspy device view.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when the device sends data to the configured endpoint

## Typical Requirements Before Setup

- Valid SIM card provisioned for data and SMS with a working APN for your mobile operator.
- Power the BN-401A from the vehicle supply or bench power in accordance with the manufacturer instructions.
- Knowledge of the device password (the public example commands below use the default password 123456).
- Access to the manufacturer configuration methods you plan to use such as SMS, Bluetooth or an installer tool.
- A Plaspy account or fleet setup ready to receive and identify the device once it reports to the server.
- A simple test plan to confirm the tracker appears on Plaspy after configuration (live location or a test event).

## How This Tracker Connects to Plaspy

The BN-401A typically sends GNSS position and event telemetry to Plaspy over IP using configured transport. When set to report to Plaspy's shared server endpoint and port, the device's location updates and alarm messages are forwarded to the platform for live maps, alerts and historical playback.

- The tracker is configured to report to the shared Plaspy server domain or IP (d.plaspy.com or 54.85.159.138) on port 8888.
- Data can be sent over UDP or TCP depending on the transport the device is set to use.
- Position fixes, ACC/ignition status and alarm events are transmitted to Plaspy for immediate visibility.
- Plaspy automatically detects the tracker protocol and maps incoming messages to the device record.
- Reporting intervals and alarm-triggered transmissions control how often the tracker sends updates to Plaspy.

## Common Configuration Workflow

1. Access the official manufacturer configuration method you will use (SMS commands, Bluetooth tool, or installer software).
2. Enter Plaspy server information by specifying d.plaspy.com or the server IP 54.85.159.138 in the device server settings.
3. Set the port to 8888 (Plaspy uses the same port for all supported devices).
4. Choose the transport mode UDP or TCP if the device requires explicit selection.
5. Configure the APN and any required APN username and password so the device can establish GPRS data.
6. Apply or save the configuration and restart the tracker if recommended by the manufacturer.
7. Validate the device is reporting to Plaspy by sending a check command or observing live data in Plaspy.

## Example Configuration Commands

The BN-401A supports SMS-based setup. Below are the public SMS command examples preserved from manufacturer documentation. The device default password shown in these examples is 123456. Replace placeholders and operator values before sending.

- Optional initial factory reset (use only when needed to return to default settings):
```
begin123456
```

- Set the time zone to UTC+0:
```
time zone123456 0
```

- Set the operator APN (replace {{apn}} with your operator APN):
```
apn123456 {{apn}}
```

- Set APN username and password (replace {{apnu}} and {{apnp}} with credentials if required):
```
up123456 {{apnu}} {{apnp}}
```

- Set the GPRS server by IP and port to report to Plaspy (public example uses Plaspy IP and port):
```
adminip123456 54.85.159.138 8888
```
Note: The device can also be configured to use the domain d.plaspy.com where the manufacturer tool accepts domain names.

- Set a periodic update interval (example format provided by manufacturer):
```
fix060s060s***n123456
```
(Keep this exactly as required by your firmware if you adopt the same interval pattern; consult manufacturer docs for the meaning of each field.)

- Switch to GPRS mode and specify transport where applicable. Two public variants shown:
```
gprs123456,1,1
```
or
```
gprs123456
```
(Use the variant that matches your firmware syntax. The first form can include transport and mode flags; check the device manual.)

- Verify current settings:
```
check123456
```

- Enable extended protocol or sensor reporting improvements (public example sets protocol index 18):
```
protocol123456 18
```

Placeholders explanation:
- {{apn}} = operator APN name required for mobile data
- {{apnu}} = APN username if required by operator
- {{apnp}} = APN password if required by operator

Always confirm command syntax for your device firmware version and region before sending SMS commands.

## Configuration Notes

- Firmware and hardware revisions can change command syntax and available options; verify the exact SMS format with the manufacturer's manual before applying commands.
- The BN-401A supports both TCP and UDP transport; choose the transport that fits your network and reliability needs and configure it to point at d.plaspy.com or 54.85.159.138 port 8888.
- SMS-based configuration is useful for field setups, but Bluetooth or official installer tools may offer easier batch configuration and fewer typing errors.
- The example commands use the public default password 123456; manufacturers often allow changing the password — consider updating it after initial setup for security.
- Plaspy uses the same port for all supported devices and will automatically detect the tracker protocol when the device begins reporting to the configured endpoint.

## Why Use Plaspy with This Configuration

Using the BN-401A with Plaspy provides straightforward integration for motorcycle and small vehicle fleets that need continuous location tracking, event alerts and basic telemetry. By pointing the BN-401A at Plaspy's shared server endpoint and port and adjusting reporting intervals, fleet operators can balance real-time visibility with data usage while keeping alarms and critical events immediately visible in the platform.

Learn more about Plaspy and how it manages device data and fleet visibility at https://www.plaspy.com. Manufacturer specifications, setup methods and device behavior can change over time; verify the latest device-specific configuration and command syntax on the official Coban site https://www.coban.net/.
