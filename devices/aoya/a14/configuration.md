---
slug: /aoya/a14/configuration
id: a14-configuration
sidebar_label: Configuration
title: AoYa - A14 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for the AoYa A14 GPS tracker showing Plaspy server settings and SMS commands for integration and validation
keywords:
  - AoYa A14 configuration
  - AoYa A14 setup
  - AoYa A14 server configuration
  - AoYa A14 Plaspy
  - AoYa GPS tracker configuration
  - A14 SMS configuration
  - A14 GPRS setup
  - vehicle tracking configuration
  - Plaspy tracker setup
  - GPS tracker integration
---

# AoYa - A14 Configuration

This page documents the public configuration context for using the AoYa A14 GPS tracker with the Plaspy platform. It summarizes the practical steps and public commands that are commonly used to prepare an A14 for reporting to Plaspy, including SMS command examples provided by the device manufacturer and the Plaspy server endpoint information required to receive telemetry.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when a device connects. Manufacturer side setup steps for the A14 can vary by firmware version, hardware revision, installer tools, and local operator settings. The A14 supports SMS based configuration in the public guidance below and uses a default device password in the examples which should be changed after initial setup.

## Configuration Overview

The goal of configuration is to direct the AoYa A14 to send its location and status data to Plaspy so the device becomes visible and manageable in the platform. For the A14, configuration is typically done via SMS commands that set APN credentials, server endpoint, transport mode, and other basic parameters.

- Set the mobile data APN and optional APN credentials so the device can connect over GPRS.
- Point the tracker to the Plaspy server endpoint and confirm the correct port is used.
- Select the transport mode (UDP or TCP) if required by the device firmware.
- Validate settings and confirm the device is reporting to Plaspy.
- Optionally perform a factory reset or timezone setup during initial provisioning.

## Plaspy Server Settings

Use the following public Plaspy server settings when configuring the AoYa A14:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when the device connects

Note that Plaspy uses the same port for all supported devices and will detect the device protocol automatically, so only the server address and transport need to be provided by the tracker configuration.

## Typical Requirements Before Setup

- A working SIM card with a data plan and SMS capability installed in the A14.
- Access to a phone that can send SMS commands to the tracker or access to the manufacturer's software if preferred.
- The device is powered and has sufficient battery or external power for configuration.
- APN name and, if required, APN username and password from the mobile operator.
- The device default password as used in manufacturer examples (the public example uses 123456) and a plan to change it after setup.
- Manufacturer documentation or technical notes for the specific firmware revision of the A14.

## How This Tracker Connects to Plaspy

When configured, the AoYa A14 will use mobile data to establish a GPRS connection and send location and status messages to the Plaspy endpoint. Plaspy receives device messages on the shared server endpoint and makes the device visible in the platform once messages are parsed.

- The A14 is configured to report to the shared Plaspy server endpoint and port.
- The device sends periodic location updates and event messages to Plaspy over GPRS.
- Transport can be UDP or TCP depending on device configuration and operator network behavior.
- Plaspy automatically detects the tracker protocol and processes incoming messages.
- Successful communication results in device visibility and telemetry in Plaspy.

## Common Configuration Workflow

1. Access the official manufacturer configuration method for the AoYa A14, typically SMS commands or the vendor tool documented by AoYa.
2. Enter the Plaspy server address either as domain d.plaspy.com or as the server IP 54.85.159.138 in the device server settings.
3. Set the port to 8888 as Plaspy uses this port for all devices.
4. Choose UDP or TCP transport if the device requires an explicit transport selection.
5. Apply or save the configuration on the device and, if applicable, reboot or restart the tracker.
6. Validate connectivity and confirm the device reports to Plaspy using the provided verification commands or by checking device status in the platform.

## Example Configuration Commands

The AoYa A14 supports SMS configuration. The following commands are the public examples supplied in the manufacturer guidance. Replace placeholders and values where indicated and send each line as a separate SMS to the device phone number.

- Note on default password: the public sample commands use the default device password 123456. Change this password after initial setup as part of your security practice.
- Placeholders:
  - {{apn}} is the mobile operator APN name
  - {{apnu}} is the APN username if required
  - {{apnp}} is the APN password if required

Factory reset (optional initial step):
```text
begin123456
```

Set the time zone to UTC 0:
```text
time zone123456 0
```

Set the operator APN:
```text
apn123456 {{apn}}
```

Set the APN username and password (only if needed by your operator):
```text
up123456 {{apnu}} {{apnp}}
```

Set the GPRS server to Plaspy using the public server IP and port:
```text
adminip123456 54.85.159.138 8888
```

Switch to GPRS mode and choose transport (example formats as provided by manufacturer):
```text
gprs123456,1,1
```
or the alternative command:
```text
gprs123456
```

Verify current settings:
```text
check123456
```

Send these commands as SMS messages to the device number. After applying server and GPRS settings, confirm the device reports to the Plaspy endpoint.

## Configuration Notes

- SMS based setup is supported by the public guidance and is useful when physical access is limited; ensure SMS delivery to the device number is possible.
- The example uses a default password of 123456; if your device still uses the default, change it after setup to secure the unit.
- Different firmware revisions or customized vendor builds may require slightly different command syntax; consult the manufacturer documentation for your firmware.
- Choose UDP or TCP based on network reliability and carrier behavior; Plaspy accepts either and will auto detect the protocol.
- Plaspy uses the same port 8888 for all devices, so you only need to set the server and transport on the tracker.

## Why Use Plaspy with This Configuration

Configuring the AoYa A14 to report to Plaspy provides a straightforward way to get vehicle location and status into a single platform for monitoring and operational oversight. Using the shared Plaspy server settings and the A14's SMS configuration commands allows installers and fleet managers to provision devices quickly and validate connectivity before deployment.

Learn more about Plaspy on the main website https://www.plaspy.com and confirm the latest device specific setup recommendations, firmware notes, and manufacturer instructions at the AoYa website http://www.aoyagps.com/ since configuration methods and device behavior can change over time.
