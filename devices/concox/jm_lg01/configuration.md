---
slug: /concox/jm_lg01/configuration
id: jm_lg01-configuration
sidebar_label: Configuration
title: Concox - JM-LG01 Configuration
sidebar_class_name: menu_item_tracker
description: Configure the Concox JM-LG01 for use with Plaspy using public SMS and server settings for reliable asset tracking
keywords:
  - Concox JM-LG01 configuration
  - JM-LG01 Plaspy setup
  - Concox server configuration
  - JM-LG01 GPS tracker setup
  - Plaspy tracker configuration
  - JM-LG01 SMS commands
  - asset tracker configuration
  - portable GNSS tracker setup
  - long life battery tracker configuration
  - tracking platform integration
---

# Concox - JM-LG01 Configuration

This page documents the public configuration context for using the Concox JM-LG01 with Plaspy. It summarizes the server settings Plaspy requires, explains the typical setup workflow, and includes the publicly available SMS commands provided by the device manufacturer that are commonly used to point the tracker at Plaspy.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but manufacturer side steps can vary by firmware revision, hardware variant, installation type, and vendor tools. The example SMS commands below are the public, commonly used commands for JM-LG01 configuration; always verify exact syntax and behavior against the latest manufacturer documentation and your device firmware.

## Configuration Overview

The goal of this configuration process is to prepare the JM-LG01 so it reliably communicates its location and status to Plaspy. Using the public SMS commands and server values, you will configure network access, set the Plaspy endpoint, tune reporting intervals, and verify the device is reporting.

- Set APN and GPRS parameters so the JM-LG01 can open a data connection.
- Configure the server endpoint to point to Plaspy using either domain or IP.
- Choose transport and reporting intervals so location fixes appear in Plaspy as expected.
- Validate settings and confirm the device is actively reporting to the shared Plaspy endpoint.
- Enable GPRS mode and save settings to ensure persistent connectivity to Plaspy.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

## Typical Requirements Before Setup

- A powered JM-LG01 with a functional micro SIM that has data enabled and SMS capability.
- Knowledge of the mobile operator APN and any optional APN username or password.
- Access to an SMS capable phone or professional configuration tool to send manufacturer SMS commands.
- Access to Plaspy with an account ready to receive the device once it reports.
- Basic familiarity with the device commands or the official Concox configuration guide for your firmware version.

## How This Tracker Connects to Plaspy

The JM-LG01 is configured to report GNSS fixes and telemetry to Plaspy by sending data to the shared Plaspy server endpoint and port. Once configured with the correct APN and server settings, the device opens a GPRS session and transmits periodic updates to Plaspy where they become visible in the platform.

- GNSS position fixes are transmitted to the Plaspy endpoint for real time tracking and historical playback.
- Telemetry such as battery status, movement detection, and tamper events are sent as part of the device reports.
- The tracker uses the configured reporting interval to control how often it sends updates to port 8888 at the Plaspy server.
- Plaspy receives data over UDP or TCP and automatically detects the device protocol to interpret messages.
- Using the same port across devices simplifies server-side configuration and reduces per-device setup complexity.

## Common Configuration Workflow

1. Access the official Concox configuration method for JM-LG01, typically SMS commands or an approved Concox tool, and confirm the device firmware version.
2. Set the operator APN using the APN command and include optional username and password if required.
3. Enter the Plaspy server endpoint using either the domain d.plaspy.com or the IP 54.85.159.138 and set the port to 8888.
4. Choose UDP or TCP for transport if the device requires explicit selection.
5. Set a reporting interval appropriate for your use case and enable GPRS mode so the device can transmit data.
6. Apply or save the configuration and restart the device if the tracker requires a reboot to apply settings.
7. Validate that the device reports to Plaspy by checking the device status in your Plaspy account and by using any onboard verification command supported by the tracker.

## Example Configuration Commands

The JM-LG01 supports SMS based configuration. The manufacturer provides the following publicly documented SMS commands. Preserve placeholders such as {{apn}}, {{apnu}}, and {{apnp}} and replace them with your operator values when sending.

- Reset factory settings (optional initial step)
```text
FACTORY#
```

- Set the time zone to UTC 0
```text
GMT,E,0#
```

- Set the operator APN
Note: {{apn}} is required. {{apnu}} and {{apnp}} are optional and represent APN username and APN password respectively.
```text
APN,{{apn}},{{apnu}},{{apnp}}#
```

- Set the GPRS server using Plaspy domain (UDP or TCP selection handled separately)
```text
SERVER,1,d.plaspy.com,8888,0#
```

- Or set the GPRS server using Plaspy IP
```text
SERVER,0,54.85.159.138,8888,0#
```

- Set the update interval to every 60 seconds (two variants shown in manufacturer guidance)
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

- Check parameter settings to verify current configuration
```text
GPRSSET#
```

Send each command as a separate SMS message to the device's SIM number. Use the domain or IP SERVER command as appropriate for your setup. The FACTORY# command resets settings and should be used only when a full factory reset is desired or for initial provisioning if required.

## Configuration Notes

- SMS based configuration is commonly used for JM-LG01 but exact command support and syntax may vary with firmware revisions.
- Choose between the SERVER domain and IP versions depending on DNS availability; both point to Plaspy and use port 8888.
- The device supports UDP and TCP transport. Select the transport if the device requires explicit choice; Plaspy accepts both and auto detects protocol.
- Preserve APN placeholders and confirm operator APN details before sending commands to avoid failed data sessions.
- Always consult the manufacturer documentation for any device specific constraints or additional parameters not covered in the public command list.

## Why Use Plaspy with This Configuration

Using the JM-LG01 with Plaspy provides a straightforward path to long term asset visibility and event driven monitoring. The device's long life design and tamper aware telemetry combined with Plaspy's shared server and automatic protocol detection allow organizations to deploy portable GNSS trackers at scale while keeping server configuration consistent across device types.

To learn more about Plaspy and how the platform can support fleet and asset tracking deployments visit https://www.plaspy.com. For the latest device specific configuration commands, firmware notes, and installation guidance verify details with the manufacturer at https://www.iconcox.com/ since setup methods and firmware behavior can change over time.
