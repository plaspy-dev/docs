---
slug: /eelink/gpt19_h/configuration
id: gpt19_h-configuration
sidebar_label: Configuration
title: EElink - GPT19‑H Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for EElink GPT19‑H showing Plaspy server settings and SMS commands for integration
keywords:
  - EElink GPT19‑H configuration
  - GPT19‑H setup
  - EElink tracker configuration
  - Plaspy integration
  - GPS tracker setup
  - asset tracker configuration
  - magnetic tracker setup
  - server configuration Plaspy
  - SMS command setup
  - remote tracker configuration
---

# EElink - GPT19‑H Configuration

This page describes the public configuration context for using the EElink GPT19‑H magnetic asset tracker with Plaspy. It focuses on the shared server settings and practical setup steps that let the tracker forward location and event data into the Plaspy platform. If you are preparing a GPT19‑H for deployment, this page collects the Plaspy endpoint details and the SMS commands the manufacturer documents publicly.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer-side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. The GPT19‑H supports SMS configuration commands as shown below, and those commands are commonly used to point the unit at Plaspy using the same port Plaspy expects for all devices.

## Configuration Overview

This configuration process prepares the GPT19‑H to send position and event telemetry to Plaspy so the device appears in your Plaspy account and reports reliably. The public setup typically includes setting the cellular APN, pointing the device to the Plaspy server, selecting a transport mode if required, and validating reporting behavior.

- Configure the device APN so it can establish GPRS data and reach Plaspy
- Set the Plaspy server hostname or IP and the shared port so telemetry is routed to Plaspy
- Choose UDP or TCP transport if the tracker requires an explicit transport selection
- Adjust reporting intervals and emergency mode to match mission needs and battery life
- Verify parameters and confirm the device is visible in Plaspy after configuration

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol
- All devices in Plaspy use the same port 8888

## Typical Requirements Before Setup

- A powered GPT19‑H with a charged or replaceable battery ready for configuration
- A working SIM card with an active data plan and the correct APN for the mobile operator
- Ability to send SMS commands to the device or access to the manufacturer configuration tool
- Access to the device placement so you can observe LED or status behavior while configuring
- A Plaspy account or administrator access to validate incoming device telemetry on the platform
- Manufacturer documentation for the specific firmware revision of your GPT19‑H

## How This Tracker Connects to Plaspy

When configured, the GPT19‑H forwards GPS and LBS location fixes plus motion, tamper and event telemetry to the Plaspy server endpoint. Plaspy receives those messages on its shared port and automatically applies protocol parsing to make the device visible in the platform.

- The device is set to report to the shared Plaspy server endpoint d.plaspy.com or 54.85.159.138 on port 8888
- Location fixes and hybrid GPS/LBS positioning are forwarded to Plaspy for live mapping and history
- Motion, fall, vibration wake and tamper events are reported as telemetry events to Plaspy
- Plaspy automatically detects the incoming tracker protocol and parses messages for display and alerts
- The same port and automatic protocol detection let multiple device models coexist in Plaspy without per-device port changes

## Common Configuration Workflow

1. Access the official EElink configuration method for your device: use the documented SMS commands or the manufacturer tool appropriate for your firmware.
2. Configure the device APN using the APN command so GPRS data can be established.
3. Enter the Plaspy server address using either d.plaspy.com or 54.85.159.138 and set the port to 8888.
4. Choose UDP or TCP transport if the device requires an explicit transport selection.
5. Set reporting intervals and operational timers such as the periodic upload timer or emergency mode cadence.
6. Apply or save the configuration and restart the tracker if the device requires a reboot to apply changes.
7. Validate that the device reports to Plaspy by checking the device status and recent telemetry in your Plaspy account.

## Example Configuration Commands

The GPT19‑H can be configured by sending SMS messages with the manufacturer commands. Below are the public SMS commands provided by EElink in their documentation. Preserve placeholders exactly as shown.

- Optional initial factory reset (use only if you need to restore factory defaults)
```text
FACTORY#
```

- Set the time zone to UTC 0
```text
GMT,E,0#
```

- Set the operator APN
```text
APN,[apn]{{,[apnu],[apnp]}}#
```
Explanation: replace [apn] with your operator APN. If your operator requires an APN username or password, include the optional [apnu] and [apnp] placeholders in the order shown. Keep the commas and trailing hash.

- Set the GPRS server using the Plaspy domain (TCP or UDP port is 8888)
```text
SERVER,1,d.plaspy.com,8888#
```
Or set the GPRS server using the Plaspy IP address
```text
SERVER,0,54.85.159.138,8888#
```
Explanation: The first value after SERVER selects how the server is specified. Use the domain or IP variant depending on your preference or firmware support.

- Set the reporting interval timer to 60 seconds
```text
TIMER,60#
```

- Verify current parameters
```text
PARAM#
```
Explanation: Sending PARAM# requests the device to return its current parameter settings so you can confirm the APN, server, timer and other fields were applied.

## Configuration Notes

- SMS based setup is supported and commonly used for field configuration of the GPT19‑H; follow EElink guidance for authorized SMS sources and command syntax.
- Firmware revisions and hardware versions can change command support or syntax; verify command behavior against the GPT19‑H documentation for your device revision.
- Choose UDP or TCP according to device firmware options; Plaspy accepts telemetry over either transport on port 8888 and will detect the incoming protocol automatically.
- Use the PARAM# verification command after configuration to confirm that d.plaspy.com or 54.85.159.138 and port 8888 are set correctly.
- Keep APN placeholders [apn], [apnu], and [apnp] intact when composing commands and replace them with operator values as needed.

## Why Use Plaspy with This Configuration

Using the GPT19‑H with Plaspy centralizes location and event data for long‑term asset tracking, anti‑theft workflows, and operational visibility. The shared Plaspy endpoint and automatic protocol detection simplify fleet integration so GPS and telemetry from the GPT19‑H appear in Plaspy dashboards, alerts and historical reports with minimal per‑device port configuration.

To learn more about Plaspy and the broader platform features, visit https://www.plaspy.com. Because device specific configuration methods, firmware behavior and manufacturer details can change over time, verify the latest GPT19‑H instructions and command syntax on the official EElink site https://www.eelink.com.cn/.
