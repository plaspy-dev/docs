---
slug: /concox/ll702/configuration
id: ll702-configuration
sidebar_label: Configuration
title: Concox - LL702 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for connecting the Concox LL702 GPS tracker to Plaspy using shared server settings and SMS commands
keywords:
  - Concox LL702 configuration
  - Concox LL702 setup
  - Concox LL702 Plaspy
  - LL702 GPS tracker configuration
  - Concox tracker server setup
  - Concox LL702 SMS commands
  - Concox APN configuration
  - Plaspy device configuration
  - asset tracking configuration
  - GPS tracker integration
---

# Concox - LL702 Configuration

This page covers the public configuration context for using the Concox LL702 tracker with Plaspy. It summarizes the practical steps and public commands you can use to point an LL702 device at Plaspy, explains required prerequisites, and collects the standard server values Plaspy publishes for device integration. If your deployment requires deeper customization or alternative transport methods, consult the manufacturer documentation or vendor tools for device specific instructions.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when the device connects. Exact manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools. The LL702 supports SMS based configuration and GPRS server settings; the example commands below reflect the public SMS commands commonly used to set APN, server, timer, and GPRS mode for this model.

## Configuration Overview

The configuration process prepares the LL702 to communicate reliably with Plaspy and to appear in the platform for live tracking, alerts, and history. The public setup focuses on setting the network access parameters, pointing the device to the Plaspy endpoint, enabling data reporting, and validating connectivity.

- Set or verify the device APN so the tracker can open a GPRS session for data reporting.
- Configure the GPRS server to point to Plaspy using the published domain or IP and the shared port.
- Choose the reporting interval and enable GPRS so the device sends periodic position reports to Plaspy.
- Verify configuration with the device verification command and confirm the tracker appears in Plaspy.
- Optionally perform a factory reset or timezone adjustment as part of initial provisioning.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when the device connects

All Plaspy supported devices use the same port and Plaspy performs protocol detection automatically to accept device data.

## Typical Requirements Before Setup

- A charged LL702 device installed or accessible for configuration and testing.
- A valid Nano SIM with data enabled and a correct APN for the mobile operator.
- Ability to send SMS commands to the device or access the official manufacturer configuration tool.
- Knowledge of the APN and optional APN username and password for your SIM operator.
- Network coverage for LTE Cat 1 or 2G as available in the device region so the tracker can register on the operator network.

## How This Tracker Connects to Plaspy

The LL702 is configured to open a mobile data session and send periodic position and event messages to Plaspy at the shared server endpoint and port. Once the device establishes connectivity it will report according to the configured timer and mode, enabling visibility in Plaspy for real time tracking and alerting.

- The device uses the configured APN to establish a GPRS or LTE data connection.
- Configured server entries point reporting to d.plaspy.com or the Plaspy IP address using port 8888.
- The LL702 sends periodic position updates and event messages based on the configured timer and working mode.
- Plaspy receives those messages and automatically detects the protocol to parse location and event data.
- Successful configuration enables real time location, geofence events, and status alerts in Plaspy.

## Common Configuration Workflow

1. Access the official manufacturer configuration method for the LL702, such as SMS commands or the vendor configuration tool.
2. Set the device APN using the APN command and include username or password if required by the operator.
3. Enter the Plaspy server address by sending either the domain d.plaspy.com or the server IP 54.85.159.138.
4. Set the server port to 8888 and choose UDP or TCP if the device requires explicit transport selection.
5. Apply or save the configuration and enable GPRS mode for data reporting.
6. Restart the device if required by the firmware so new settings take effect.
7. Validate that the device reports to Plaspy by using the device verification command and checking for the tracker in the Plaspy platform.

## Example Configuration Commands

To set the LL702 via SMS, send the following public commands in the order shown. Keep placeholders as provided and replace {{apn}}, {{apnu}}, and {{apnp}} with your operator APN values where needed. Labelled reset is optional for initial provisioning.

- Optional initial factory reset
```text
FACTORY#
```

- Set the time zone to UTC 0
```text
GMT,E,0#
```

- Set the operator APN
If your operator requires only an APN
```text
APN,{{apn}}#
```
If your operator requires APN username and password
```text
APN,{{apn}},{{apnu}},{{apnp}}#
```
(Replace {{apn}} with your operator APN. Replace {{apnu}} and {{apnp}} with APN username and password if required.)

- Set the GPRS server to use the Plaspy domain on port 8888
```text
SERVER,1,d.plaspy.com,8888,0#
```

- Or set the GPRS server to use the Plaspy IP on port 8888
```text
SERVER,0,54.85.159.138,8888,0#
```

- Set the update interval to every 60 seconds
Single parameter form
```text
TIMER,60#
```
Two parameter form
```text
TIMER,60,60#
```

- Enable GPRS mode
```text
GPRSON,1#
```

- Check current GPRS and server parameters
```text
GPRSSET#
```

These commands reflect the publicly available SMS configuration flow for the LL702. Use the domain form to allow DNS resolution and the IP form when DNS is not available or when recommended by local installation guidelines.

## Configuration Notes

- Firmware and hardware revisions can change exact command support and syntax. Verify the command list against your device firmware level.
- The LL702 supports SMS based configuration as shown; vendor tools or USB/device configuration utilities may also be available depending on your supplier.
- You can set the Plaspy server using either the domain d.plaspy.com or the IP 54.85.159.138 both paired with port 8888. Plaspy accepts UDP or TCP on that port.
- Plaspy uses the same port for all supported devices and automatically detects the device protocol on connection, reducing per device protocol selection effort.
- Keep APN username and password placeholders {{apnu}} and {{apnp}} available in case your SIM operator requires authentication.

## Why Use Plaspy with This Configuration

Configuring the LL702 to report to Plaspy gives operations teams and fleet managers persistent visibility into asset location, alerts, and historical activity. The LL702’s multi source positioning and long standby capability pair well with Plaspy’s centralized platform to deliver continuous telemetry, geofence monitoring, and event driven alerts for anti theft and fleet oversight.

To learn more about Plaspy and how it supports device integrations visit https://www.plaspy.com. Manufacturer specifications, command syntax, and firmware behavior can change over time so verify the latest device specific setup details on the manufacturer website https://www.iconcox.com/ before large scale deployment.
