---
slug: /concox/jm_vl01/configuration
id: jm_vl01-configuration
sidebar_label: Configuration
title: Concox - JM-VL01 Configuration
sidebar_class_name: menu_item_tracker
description: Public setup guide for Concox JM VL01 showing Plaspy server settings SMS commands and practical steps for integration
keywords:
  - Concox JM-VL01 configuration
  - JM-VL01 setup Plaspy
  - Concox GPS tracker setup
  - JM-VL01 server configuration
  - fleet tracker Plaspy integration
  - JM-VL01 SMS commands
  - vehicle tracking configuration
  - JM-VL01 APN settings
  - Concox tracker GPRS setup
  - GPS platform setup
---

# Concox - JM-VL01 Configuration

This page documents the public configuration context for using the Concox JM-VL01 tracker with Plaspy. It consolidates the Plaspy server settings, typical prerequisites, and practical setup commands that are publicly available for this model. Where applicable, sample SMS commands included with the JM-VL01 manufacturer guidance are shown so you can configure the device to report to Plaspy.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Exact manufacturer side setup steps for the JM-VL01 can vary by firmware, hardware revision, installation type, and vendor tools. The example SMS commands below reflect publicly available instructions and should be used alongside the official Concox documentation when performing a live setup.

## Configuration Overview

The configuration process prepares the JM-VL01 to communicate with Plaspy and ensures the device reports location and event data reliably. Typical setup uses the device SMS configuration path provided by Concox or the vendor tool that supports this model.

- Configure the device to point to the Plaspy server endpoint so location and event data are delivered.
- Set the APN and GPRS or LTE data parameters so the tracker can establish a mobile data connection.
- Set reporting intervals such as the periodic timer to control how frequently location updates are sent to Plaspy.
- Enable GPRS data mode and verify settings with the device verification command.
- Validate device visibility in Plaspy after applying settings and, if needed, restart the device to apply changes.

## Plaspy Server Settings

When configuring the JM-VL01 for Plaspy, use the following public server settings exactly as shown:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

## Typical Requirements Before Setup

- A powered and accessible JM-VL01 installed or connected to vehicle power for configuration and testing
- A valid mobile SIM card with data enabled and the correct APN information for the SIM operator
- Ability to send SMS commands to the device from a management phone if using SMS configuration
- Access to Concox official setup documentation or vendor configuration tools for the JM-VL01
- Known APN values and any required APN username or password for your mobile operator
- Confirmation that the unit's firmware and hardware revision are supported by your installer procedures

## How This Tracker Connects to Plaspy

The JM-VL01 is configured to report position and event data to a Plaspy server endpoint and port so fleet managers can monitor devices in the platform. Configuration directs the tracker to send data to either the Plaspy domain or the Plaspy IP using the shared Plaspy port.

- The tracker sends location and event reports to d.plaspy.com or to 54.85.159.138 on port 8888
- You can configure the device to use UDP or TCP transport according to device options
- Plaspy automatically detects the tracker protocol so the platform can parse incoming data from supported devices
- Event notifications such as geo fence alerts, ignition changes, and other triggers are delivered to the platform for monitoring
- Successful configuration enables visibility and operational monitoring of the JM-VL01 devices in Plaspy

## Common Configuration Workflow

1. Access the official Concox configuration method for the JM-VL01 either via SMS commands or the vendor configuration tool.
2. Enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 into the device settings.
3. Set the port to 8888 for the Plaspy service.
4. Choose UDP or TCP transport if the device requires a transport selection for the SERVER setting.
5. Configure the device APN and any required APN credentials so mobile data can be used.
6. Apply or save the configuration on the device and restart the unit if the procedure requires a reboot.
7. Validate that the JM-VL01 reports to Plaspy and appears in the platform with expected location and event updates.

## Example Configuration Commands

The JM-VL01 supports SMS based configuration with the following public commands. Send these SMS messages in the order shown when performing an initial setup. Labeling notes are provided for clarity.

- Optional factory reset or initial setup step
```text
FACTORY#
```

- Set the time zone to UTC 0
```text
GMT,E,0#
```

- Set the operator APN
Note that {{apn}} is a placeholder for your mobile operator APN. If your operator requires an APN username or password use the optional placeholders {{apnu}} and {{apnp}} as shown.
```text
APN,{{apn}}# 
```
or with username and password placeholders
```text
APN,{{apn}},{{apnu}},{{apnp}}#
```

- Set the GPRS server to use the Plaspy domain on port 8888
```text
SERVER,1,d.plaspy.com,8888,0#
```

- Alternatively set the GPRS server using the Plaspy server IP on port 8888
```text
SERVER,0,54.85.159.138,8888,0#
```

- Set the reporting update interval to 60 seconds
```text
TIMER,60#
```
or alternate timer format
```text
TIMER,60,60#
```

- Enable GPRS mode
```text
GPRSON,1#
```

- Verify GPRS and server parameters
```text
GPRSSET#
```

Preserve placeholders when composing APN commands. Replace {{apn}}, {{apnu}}, and {{apnp}} with your operator values before sending.

## Configuration Notes

- Firmware and hardware revisions may alter available SMS command formats or parameter ordering. Verify the commands against the device manual for your unit.
- SMS based configuration is documented here because it is publicly available for the JM-VL01. Vendor tools or a serial configuration interface may also be available depending on your supplier.
- The device examples include both domain and IP SERVER commands. Use the domain variant to refer to d.plaspy.com or the IP variant for 54.85.159.138 if required by your workflow.
- Choose UDP or TCP consistent with your installation requirements. Plaspy supports either transport and automatically detects the incoming protocol.
- All devices reporting to Plaspy use the same port 8888. Make sure that network firewalls allow outbound and inbound traffic as required for the chosen transport.

## Why Use Plaspy with This Configuration

Configuring the Concox JM-VL01 to report to Plaspy provides a practical way to centralize location, event, and operational telemetry from your fleet. Using the shared Plaspy server endpoint and port simplifies deployment across many trackers and lets Plaspy automatically detect the device protocol so you can focus on monitoring and operations rather than per device parsing rules.

To learn more about Plaspy and how the platform works with devices like the Concox JM-VL01 visit https://www.plaspy.com. Device specific configuration commands and firmware behavior can change over time, so please verify the latest setup and technical documentation on the Concox site https://www.iconcox.com/ before performing production deployments.
