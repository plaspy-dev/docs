---
slug: /concox/jm_vg02/configuration
id: jm_vg02-configuration
sidebar_label: Configuration
title: Concox - JM-VG02 Configuration
sidebar_class_name: menu_item_tracker
description: Public setup guide for Concox JM-VG02 showing Plaspy server settings and SMS commands for device configuration
keywords:
  - Concox JM-VG02 configuration
  - Concox JM-VG02 setup
  - JM-VG02 Plaspy configuration
  - JM-VG02 server settings
  - Concox OBD II tracker configuration
  - JM-VG02 SMS commands
  - Plaspy tracker setup
  - vehicle tracker configuration guide
  - GPS platform setup Concox
  - tracking software configuration
---

# Concox - JM-VG02 Configuration

This page covers the public configuration context for using the Concox JM-VG02 series tracker with Plaspy. It summarizes the Plaspy server settings you need, describes the typical preconditions, and collects publicly available SMS configuration commands that are commonly used to point a JM-VG02 device at the Plaspy service.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol on receipt of data. Manufacturer-side setup steps can vary by firmware, hardware revision, installation type, and vendor tools, so use the commands shown here as a practical starting point and verify details against the device documentation or vendor guidance.

## Configuration Overview

Configuring a JM-VG02 for Plaspy prepares the device to send location and event data to Plaspy's centralized server endpoint and port. The public commands in this guide show the typical SMS-based setup flow used by many Concox devices to set APN, server, timers, and GPRS mode.

- Point the tracker at the Plaspy server endpoint and set the required port to enable data delivery.
- Configure APN and GPRS settings so the device can establish a mobile data connection.
- Set reporting intervals and timers to control how frequently the device sends updates.
- Validate configuration and connectivity so the device appears in Plaspy and reports telemetry.
- Optionally return the device to factory defaults before a new configuration for a clean setup.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP; the device may be configured to use UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when data arrives
- All devices in Plaspy use the same port to simplify server configuration

## Typical Requirements Before Setup

- Ensure the JM-VG02 is installed and powered, for example plugged into an OBD II port when applicable.
- Have an active SIM card inserted with mobile data enabled and the correct APN information for your operator.
- Access to a phone or SMS gateway to send configuration SMS commands to the device if using SMS setup.
- The manufacturer's official configuration instructions or a copy of the device manual for firmware specific behaviors.
- Basic network connectivity to verify the device can reach the Plaspy server domain or IP.
- Note that exact commands and responses can vary with firmware revision and region.

## How This Tracker Connects to Plaspy

When configured, the JM-VG02 is instructed to report location and event data to the shared Plaspy server endpoint and port. Plaspy receives device connections over the specified transport and maps the incoming data to the appropriate tracker protocol automatically.

- The tracker uses GPRS to send packets to d.plaspy.com or to 54.85.159.138 on port 8888.
- Choose UDP or TCP transport on the device if required by the device firmware.
- Plaspy detects the device protocol automatically so no protocol selection is needed in Plaspy.
- Regular position updates and event messages are delivered to the Plaspy server endpoint for processing.
- Once reporting is working the device will become visible in the Plaspy platform and send periodic telemetry.

## Common Configuration Workflow

1. Access the official Concox configuration method for the JM-VG02 such as SMS commands documented by the manufacturer.
2. If required by the device, enter the server domain d.plaspy.com or the server IP 54.85.159.138.
3. Set the server port to 8888 for all Plaspy device connections.
4. Choose UDP or TCP transport on the device if the firmware requires selecting the transport.
5. Configure the APN and any APN username or password required by the mobile operator.
6. Apply or save the configuration and restart the tracker if the device requires a reboot to apply settings.
7. Validate that the tracker reports to Plaspy by checking connectivity and that the device appears on the Plaspy platform.

## Example Configuration Commands

The JM-VG02 can be configured by sending SMS messages to the device. The following commands are public, shown in the same logical order as typical setup flows. Labeling and parameters are preserved; placeholders such as {{apn}}, {{apnu}}, and {{apnp}} are used where you must provide the operator specific values.

- Optional initial factory reset (use only when you want to restore defaults)
```text
FACTORY#
```

- Set the time zone to UTC 0
```text
GMT,E,0#
```

- Set the operator APN
Use {{apn}} for the APN name. If your operator requires an APN username and password include {{apnu}} and {{apnp}} after the APN.
```text
APN,{{apn}}#
```
Or with username and password
```text
APN,{{apn}},{{apnu}},{{apnp}}#
```

- Set the GPRS server using domain (preferred readable form)
```text
SERVER,1,d.plaspy.com,8888,0#
```

- Or set the GPRS server using IP address
```text
SERVER,0,54.85.159.138,8888,0#
```

- Set the update interval to 60 seconds (two accepted forms shown)
```text
TIMER,60#
```
or
```text
TIMER,60,60#
```

- Enable GPRS mode
```text
GPRSON,1#
```

- Verify current GPRS related settings
```text
GPRSSET#
```

Notes on placeholders:
- {{apn}} is the mobile data APN name provided by your SIM operator.
- {{apnu}} and {{apnp}} represent optional APN username and APN password if required by the operator.
- Use the domain form SERVER,1,d.plaspy.com,8888,0# to reference the Plaspy domain, or SERVER,0,54.85.159.138,8888,0# to use the numeric IP.

## Configuration Notes

- SMS based setup is a commonly supported method for Concox devices like the JM-VG02; confirm that your device accepts SMS commands and that the SIM can receive SMS.
- Firmware and hardware revisions can change command sets or default behavior; consult the official documentation for your device firmware version when in doubt.
- Choose UDP or TCP based on installer preference and device firmware support; both transports are supported to reach Plaspy on port 8888.
- All Plaspy devices use the same port to simplify server configuration and to allow Plaspy to route connections reliably.
- Test connectivity after configuration using the verification command and by confirming the device appears in Plaspy.

## Why Use Plaspy with This Configuration

Configuring the JM-VG02 to report to Plaspy gives organizations a practical way to centralize vehicle visibility, driving behavior alerts, and operational monitoring. Because Plaspy automatically detects the protocol and uses a shared server endpoint and port, integrating a device is primarily a matter of setting APN, server, transport, and timers on the device itself.

To learn more about Plaspy and how it can accept telemetry from compatible trackers visit https://www.plaspy.com. For the latest device specific command references, firmware notes, and full product documentation verify configuration details on the manufacturer site https://www.iconcox.com/ as device methods and firmware behavior can change over time.
