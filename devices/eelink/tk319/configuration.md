---
slug: /eelink/tk319/configuration
id: tk319-configuration
sidebar_label: Configuration
title: EElink - TK319 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for EElink TK319 showing Plaspy server settings SMS commands and setup workflow for platform integration
keywords:
  - EElink TK319 configuration
  - EElink TK319 setup
  - TK319 Plaspy configuration
  - GPS tracker configuration
  - EElink tracker setup
  - vehicle tracking configuration
  - fleet management tracker
  - GPS platform setup
  - server configuration Plaspy
  - SMS configuration commands
---

# EElink - TK319 Configuration

This page documents the public configuration context for using the EElink TK319 tracker with Plaspy. It collects the Plaspy server settings, the common SMS commands published for this model, and a practical setup workflow so technical users can prepare and validate the device for visibility in Plaspy. Use this guide with the official manufacturer documentation and the device tools you have on hand.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Exact manufacturer-side steps can vary by firmware revision, hardware variant, installation type, and vendor tools. The commands shown here derive from the public TK319 configuration examples and demonstrate how to point the tracker at Plaspy and verify connectivity.

## Configuration Overview

The aim of configuring a TK319 for Plaspy is to prepare the tracker to communicate reliably with the Plaspy server and to confirm the device is visible and reporting as expected. The public configuration examples for this model use SMS-based commands to set APN, the server endpoint, and reporting intervals.

- Point the device to the Plaspy server domain or IP so data uploads reach Plaspy.
- Configure the device APN and GPRS parameters required by the installed SIM.
- Set the device reporting interval to the desired frequency for tracking.
- Verify configuration with a parameter check and confirm the device appears in Plaspy.
- Optionally reset to factory defaults before initial setup when preparing new or reused units.

## Plaspy Server Settings

Use the following public Plaspy server settings when configuring the TK319:

- Server domain: d.plaspy.com
- Server IP: 54.85.159.138
- Port: 8888
- Transport: device may be configured to use UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

## Typical Requirements Before Setup

- Power the device with the recommended supply or battery and ensure it boots normally.
- Insert an active SIM card with a data plan and the correct APN for the operator.
- Confirm you have the official EElink configuration method available such as SMS commands or the manufacturer's configuration tool.
- Have a way to send SMS commands to the device from the SIM number allowed by the tracker.
- Note the device IMEI or identifier so you can find it in Plaspy after configuration.
- Ensure the tracker has sufficient GPS or network coverage for initial location fixes.

## How This Tracker Connects to Plaspy

When configured to use Plaspy, the TK319 reports location and device data to the shared Plaspy endpoint and port so Plaspy can display and manage the tracker. The process typically uses the tracker’s GPRS/WCDMA connectivity to upload messages to the server you configure.

- The tracker uploads position and status messages to d.plaspy.com or directly to 54.85.159.138 on port 8888.
- You can choose UDP or TCP transport when the device requires a transport selection; both are supported by Plaspy on the shared port.
- Plaspy auto-detects the tracker protocol so the platform can parse incoming messages without per-device server changes.
- After successful configuration, the device should appear in Plaspy and begin regular reporting according to the set TIMER interval.
- Use the device parameter check command to confirm settings on the device before final validation in Plaspy.

## Common Configuration Workflow

1. Access the official EElink configuration method for your unit, for example SMS setup as shown in the public commands or the manufacturer's configuration tool.
2. Enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 in the device server settings.
3. Set the server port to 8888 as required by Plaspy and by all devices supported by the platform.
4. Choose UDP or TCP transport if the device requires you to select a transport type.
5. Configure the device APN and any APN username or password placeholders needed for your SIM operator.
6. Apply or save the configuration and restart the device if required by the manufacturer.
7. Validate that the device reports to Plaspy by checking the device list or live data in Plaspy and by using the device PARAM command to confirm local settings.

## Example Configuration Commands

The TK319 public configuration examples are commonly sent by SMS. Commands below are preserved from the public manufacturer examples and shown in the recommended order.

- Optional initial reset to factory defaults (use only when needed during initial provisioning):
```text
FACTORY#
```

- Set the time zone to UTC 0:
```text
GMT,E,0#
```

- Set the operator APN. Replace the placeholders with your operator values:
```text
APN,[apn]
```
If your APN requires a username or password include the following form where [apnu] is the APN username and [apnp] is the APN password:
```text
APN,[apn],[apnu],[apnp]#
```
Note: keep the placeholders [apn], [apnu], and [apnp] and replace them with your actual operator values.

- Set the GPRS server to use the Plaspy domain on the shared Plaspy port:
```text
SERVER,1,d.plaspy.com,8888#
```

- Or set the GPRS server using the Plaspy server IP on the same shared port:
```text
SERVER,0,54.85.159.138,8888#
```

- Set the location update interval to every 60 seconds:
```text
TIMER,60#
```

- Check current device parameters:
```text
PARAM#
```

Follow the manufacturer SMS syntax exactly. Placeholders such as [apn] must be replaced by your operator APN. The examples above preserve the public command order where relevant.

## Configuration Notes

- SMS-based configuration is an explicitly supported public method for this model and is shown in the example commands; manufacturer tools may provide equivalent options.
- Firmware versions or hardware revisions can change command syntax or available features; verify commands against the device firmware release notes when possible.
- Choose UDP or TCP according to installer preference or network conditions; Plaspy supports both transports on the shared port.
- Keep a record of any changes and verify the device IMEI and reporting status in Plaspy after configuration.
- Use PARAM# to confirm the tracker saved the settings before relying on platform visibility.

## Why Use Plaspy with This Configuration

Using Plaspy with a correctly configured TK319 gives organizations centralized visibility into location, reporting status, and basic device health via a common server endpoint. The shared Plaspy server and automatic protocol detection simplify integration so multiple device models can coexist under the same platform port and be parsed automatically by Plaspy.

Learn more about Plaspy and how the platform handles device reporting and fleet visibility at https://www.plaspy.com. For the latest device specific configuration methods, firmware behavior, and manufacturer details verify current information on the EElink website https://www.eelink.com.cn/
