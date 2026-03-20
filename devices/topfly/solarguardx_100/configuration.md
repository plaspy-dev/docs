---
slug: /topfly/solarguardx_100/configuration
id: solarguardx_100-configuration
sidebar_label: Configuration
title: TopFly - SolarGuardX 100 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for TopFly SolarGuardX 100 showing Plaspy server settings and example SMS commands for setup
keywords:
  - TopFly SolarGuardX 100 configuration
  - TopFly SolarGuardX 100 setup
  - SolarGuardX 100 server configuration
  - SolarGuardX 100 Plaspy setup
  - Plaspy tracker configuration
  - GPS tracker configuration guide
  - container tracker setup
  - solar GPS tracker configuration
  - asset tracking server settings
  - SMS configuration commands
---

# TopFly - SolarGuardX 100 Configuration

This page covers the public configuration context for using the TopFly SolarGuardX 100 with Plaspy. It gathers the practical server settings and the manufacturer provided SMS commands that are commonly used to point the tracker at Plaspy and enable reporting of location, alarms, and telemetry.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Exact manufacturer-side steps can vary by firmware, hardware revision, installation type, and vendor tools, so use the details below as a practical configuration reference and confirm any device specific steps with TopFly documentation.

## Configuration Overview

Configuring the SolarGuardX 100 for Plaspy prepares the device to send location, event and sensor data to the platform so assets appear in real time and historical tracks are preserved. The process typically includes network and APN setup, pointing the device to the Plaspy server endpoint and port, and setting an appropriate reporting cadence.

- Prepare the device with a charged battery and a data capable SIM and confirm APN credentials.
- Configure the tracker server entry to point to Plaspy using the shared server endpoint and port.
- Set the reporting interval for location and event updates to match your visibility needs and battery considerations.
- Validate connectivity and confirm the device appears and reports in Plaspy after configuration.
- Secure or change the default device password after initial setup to protect remote commands.

## Plaspy Server Settings

When configuring TopFly SolarGuardX 100 for use with Plaspy, use the following public server settings:

- server domain d.plaspy.com
- server IP 54.85.159.138
- port 8888
- transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol so the platform accepts supported transports

Note: All devices in Plaspy use the same port 8888. You can enter either the domain d.plaspy.com or the IP 54.85.159.138 when configuring the tracker.

## Typical Requirements Before Setup

- A charged SolarGuardX 100 or sufficient power connection to perform configuration tasks.
- A nano SIM card with active data and SMS capability and the carrier APN, username, and password if required.
- Access to the official TopFly configuration method for your unit such as SMS commands or vendor configuration tools.
- Plaspy account access to register or validate the device after it begins reporting.
- APN details and any carrier locks or settings required by your cellular provider.
- Optional BLE or accessory setup if you plan to forward sensor telemetry to Plaspy.

## How This Tracker Connects to Plaspy

The SolarGuardX 100 is configured to report its position, alarms, and auxiliary telemetry to Plaspy using standard network transports. Once the device is set to the Plaspy endpoint and port, the platform receives updates for real time monitoring and historical analysis.

- The tracker reports to the shared Plaspy server endpoint and port (d.plaspy.com or 54.85.159.138 on port 8888).
- Location updates and alarms are sent over the selected transport (UDP or TCP).
- Buffered points are uploaded when coverage returns so Plaspy maintains a continuous track history.
- BLE accessory telemetry and event data can be forwarded to Plaspy as part of the device payload.
- Plaspy receives and interprets the tracker protocol automatically for supported devices.

## Common Configuration Workflow

1. Access the official TopFly configuration method for the SolarGuardX 100 such as SMS commands, the vendor web or desktop tool, or remote network commands.
2. Enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 in the device server settings.
3. Set the port to 8888 (Plaspy uses this same port for all supported devices).
4. Choose UDP or TCP when the device requires a transport selection; Plaspy accepts either and will auto detect the protocol.
5. Configure APN and carrier credentials if required by your cellular provider.
6. Apply or save the configuration on the tracker and restart the device if the manufacturer recommends a reboot.
7. Validate that the device reports to Plaspy and appears in your account with expected update intervals and events.

If you are using SMS commands as the configuration method, the sample commands below follow the order recommended by the manufacturer for initial setup.

## Example Configuration Commands

The SolarGuardX 100 supports SMS-based configuration. The sample setup below assumes the device password is 0000 which is the default. Replace placeholders as noted.

- Set the device time zone to UTC 0
```
GMT,0000,0#
```

- Set the operator APN. Replace the placeholders with your carrier values:
  - [apn] is the APN string supplied by your mobile carrier
  - [apnu] is the APN username if required
  - [apnp] is the APN password if required
```
APN,0000,[apn],[apnu],[apnp]#
```

- Set the GPRS server to Plaspy using the public IP and port. You may instead enter d.plaspy.com followed by the port in tools that accept a domain name.
```
IP,0000,54.85.159.138 8888#
```

- Set the reporting interval to 60 seconds. This example uses the device TIMER command format shown by the manufacturer.
```
TIMER,0000,60:60:0:0#
```

Notes on these commands:
- Commands are sent as SMS to the device number using the device password 0000 shown here. Change the password after successful setup if desired.
- If your configuration method is a vendor tool, enter the same values (d.plaspy.com or 54.85.159.138 and port 8888) and set the APN and timer values there instead of using SMS.
- If the device or firmware supports setting transport type explicitly, choose UDP or TCP according to your deployment needs; Plaspy accepts both.

## Configuration Notes

- The example SMS commands above are public manufacturer provided commands. Always confirm command syntax with the most current TopFly documentation for your firmware revision.
- The device default password shown in the example is 0000. Update the password after initial configuration to secure remote commands.
- Different firmware or hardware revisions may expose additional options such as explicit transport selection, encryption settings, or alternate timer formats.
- SMS based setup is useful in-field; vendor tools may provide bulk configuration or easier transport selection for fleets.
- Plaspy uses the same port for all devices and automatically detects the tracker protocol so the platform side requires no per device port changes.

## Why Use Plaspy with This Configuration

Using SolarGuardX 100 configured to point at Plaspy gives operations a consistent server endpoint and predictable workflow for bringing rugged solar powered trackers into a fleet or cargo security system. The shared Plaspy server settings and automatic protocol detection simplify onboarding and let teams focus on deployment and alarms rather than per device server tuning.

Learn more about Plaspy and how it integrates with devices like the SolarGuardX 100 at https://www.plaspy.com. For the latest device specific configuration commands, firmware notes, and installation instructions verify details on the manufacturer site https://www.topflytech.com/ as device behavior and setup methods can change over time.
