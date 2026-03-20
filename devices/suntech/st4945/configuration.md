---
slug: /suntech/st4945/configuration
id: st4945-configuration
sidebar_label: Configuration
title: Suntech - ST4945 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Suntech ST4945 integration with Plaspy including server settings SMS commands and setup workflow
keywords:
  - Suntech ST4945 configuration
  - Suntech ST4945 setup
  - ST4945 Plaspy integration
  - Suntech GPS tracker configuration
  - ST4945 server configuration
  - Suntech ST4945 SMS setup
  - ST4945 TCP UDP configuration
  - GPS tracker Plaspy guide
  - Suntech tracker instructions
  - ST4945 tracking platform
---

# Suntech - ST4945 Configuration

This page provides the public configuration context for using the Suntech ST4945 tracker with Plaspy. It focuses on the practical settings and commands you can use to point an ST4945 at the Plaspy backend so the device can report location and status information into your Plaspy account. Where manufacturer commands are publicly documented we include them and explain how to apply them.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer side setup steps can vary by firmware version, hardware revision, installation type, or vendor configuration tools. The ST4945 supports SMS based configuration as well as TCP and UDP reporting, so this guide covers the Plaspy server settings and the common SMS commands that are used by integrators.

## Configuration Overview

The goal of configuring an ST4945 for Plaspy is to prepare the device so it reliably communicates with Plaspy servers and appears in the platform with correct reporting intervals and network settings. Public configuration for this model commonly uses SMS commands to set APN and server parameters and to adjust reporting cadence.

- Configure the device APN and GPRS server address so the tracker can reach the mobile network and Plaspy endpoint.
- Set the reporting interval to an appropriate value for your use case so location updates arrive in Plaspy as expected.
- Choose transport mode TCP or UDP on port 8888 depending on installer preference and network behavior.
- Validate connectivity and settings using the manufacturer verification command so Plaspy can detect the tracker protocol automatically.
- Confirm the device is visible in Plaspy and generating telemetry and event reports after configuration.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol when the device connects

These values are the public Plaspy endpoint details that you should enter on the ST4945 when configuring the GPRS server or network destination. Plaspy uses the same port for all supported devices and relies on automatic protocol detection for protocol handling.

## Typical Requirements Before Setup

- A charged ST4945 device with a working SIM card that has data enabled if using TCP or UDP reporting.
- Access to a method to send SMS commands to the tracker for devices configured via SMS, or access to the manufacturer configuration utility if using USB or local tools.
- The device IMEI so you can derive the device ID required by Suntech SMS commands as described below.
- Knowledge of the network operator APN and, if required, the APN username and password.
- Access to the official Suntech configuration instructions and release notes for the ST4945 firmware you are using.

## How This Tracker Connects to Plaspy

The ST4945 is configured to report to the shared Plaspy server endpoint and port so location and alert messages are routed into the Plaspy platform. Depending on your chosen transport the device will open a session to Plaspy and send periodic position and event messages that Plaspy will parse and display.

- The device can send data over TCP or UDP to the Plaspy endpoint d.plaspy.com or directly to IP 54.85.159.138 on port 8888.
- Plaspy automatically detects the tracker protocol when the device connects so you do not need to preselect the protocol inside the platform.
- The tracker may also support sending certain configuration and status messages via SMS which can be used to set APN and server parameters.
- After configuration, Plaspy will show device location updates, motion or panic alerts, and other supported events from the ST4945.

## Common Configuration Workflow

1. Access the official Suntech configuration method you plan to use for the ST4945 such as SMS command interface or the manufacturer utility.
2. Determine and enter the Plaspy server destination using d.plaspy.com or 54.85.159.138 as the server address.
3. Set the server port to 8888 (Plaspy uses the same port for all devices).
4. Choose UDP or TCP in the device settings if transport selection is required by the device.
5. Configure the device APN details and any APN username or password required by the mobile operator.
6. Apply or save the configuration and restart the device if the tracker requires a reboot to apply settings.
7. Validate that the device reports to Plaspy by checking device activity in Plaspy and using the manufacturer verification command if available.

## Example Configuration Commands

The ST4945 supports SMS based commands for network and reporting configuration. The following public commands are extracted from Suntech instructions and shown as templates. Replace [device_id] with the device ID derived from the IMEI as described below. Preserve the placeholders [apn], [apnu], and [apnp] when you insert your operator values.

How to calculate the device ID
- The device ID used by Suntech SMS commands is the six digits taken from the IMEI as documented by Suntech the last 6 numbers excluding the final check digit.
- Example: if the IMEI is 123456789012345 then the device ID in this example is 901234.

1) Set the operator APN and GPRS server
- If APN username and password are not required use flag 0 and leave username and password blank
```text
SA200NTW;[device_id];02;0;[apn];; ;54.85.159.138;8888;;;;
```

- If APN username or password are required use flag 1 and include [apnu] and [apnp]
```text
SA200NTW;[device_id];02;1;[apn];[apnu];[apnp];54.85.159.138;8888;;;;
```

Note on placeholders
- [apn] is your mobile operator APN
- [apnu] is the APN username when required
- [apnp] is the APN password when required
- [device_id] is the six digit device identifier derived from the IMEI as shown above

2) Set the update interval to 60 seconds
```text
SA200RPT;[device_id];02;60;60;60;3;0;0;0;0;0
```

3) Check current settings or verify configuration
```text
SA200CMD;[device_id];02;PresetA
```

Send these SMS commands from an authorized phone number if the tracker is configured to accept SMS configuration. Exact behavior depends on ST4945 firmware and configuration mode.

## Configuration Notes

- Firmware variations and hardware revisions can change the exact command syntax or available parameters. Always verify the command format against the Suntech documentation for your firmware version.
- The ST4945 supports both SMS based configuration and TCP or UDP reporting. Use SMS for initial provisioning if network connectivity is not yet established.
- Choose UDP or TCP based on network reliability and latency characteristics in your deployment. Plaspy accepts either transport on port 8888 and will detect the protocol automatically.
- When an APN username or password is required set the APN credential flag to 1 as shown in the example command. If no credentials are required use the flag 0 and leave those fields blank.
- After applying settings, confirm the device is reporting to Plaspy by observing activity in the platform and using the verification command above.

## Why Use Plaspy with This Configuration

Using the Suntech ST4945 with Plaspy provides a straightforward way to centralize location, motion alerts, and emergency notifications from portable trackers into one fleet or asset management platform. The ST4945's support for TCP, UDP, and SMS combined with Plaspy's automatic protocol detection makes it practical to deploy devices in mixed network environments and have them report reliably to a single Plaspy endpoint.

To learn more about Plaspy and how it handles device connectivity visit https://www.plaspy.com. Device specific configuration methods, firmware behavior, and manufacturer details can change over time so verify the latest ST4945 setup details on Suntech's official site http://www.suntechint.com/ before a large scale deployment.
