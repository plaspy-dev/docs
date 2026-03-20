---
slug: /globalsat/tr_313/configuration
id: tr_313-configuration
sidebar_label: Configuration
title: GlobalSat - TR-313 Configuration
sidebar_class_name: menu_item_tracker
description: Public guide to configure the GlobalSat TR-313 for use with Plaspy using shared server settings and SMS commands
keywords:
  - GlobalSat TR-313
  - TR-313 configuration
  - TR-313 setup
  - GlobalSat tracker configuration
  - TR-313 Plaspy setup
  - Plaspy GPS tracker configuration
  - TR-313 server configuration
  - GlobalSat tracking platform setup
  - TR-313 SMS configuration
  - Personal tracker TR-313
---

# GlobalSat - TR-313 Configuration

This page covers the public configuration context for using the GlobalSat TR-313 personal tracker with Plaspy. It consolidates the Plaspy server settings you must apply and shows the publicly available SMS-style configuration commands that are commonly used to point a TR-313 at a third party server. This guidance is intended for technical users preparing the device for integration with Plaspy and for administrators who need clear, practical steps to complete setup and validation.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when the device connects. Exact manufacturer-side setup steps can vary depending on TR-313 firmware, hardware revision, installation type, and vendor tools. The TR-313 supports SMS-based configuration strings in its public documentation, so this page includes the example SMS commands and notes needed to direct the device to Plaspy's endpoint.

## Configuration Overview

The configuration process prepares the TR-313 to report position and status to Plaspy by setting network destination and related parameters. With Plaspy's shared endpoint and port, the goal is to ensure the device sends its telemetry to the correct address and transport so the platform can receive and decode it automatically.

- Configure the TR-313 to use Plaspy as its remote server endpoint so location reports reach the platform.
- Set the server host and port values and choose UDP or TCP transport if required by the device firmware.
- Use the TR-313 SMS command format to push configuration values when an over-the-air or SMS workflow is used.
- Reboot or restart the tracker if required so new settings take effect and Plaspy can detect the device protocol.
- Validate connectivity by confirming the tracker appears in Plaspy and reports expected position updates.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

Plaspy uses the same port for all supported devices and relies on automatic protocol detection when a tracker connects.

## Typical Requirements Before Setup

- Ensure the TR-313 has power and is reachable for configuration.
- An active SIM that can send/receive SMS and data as required by the installation.
- Know the device IMEI and any account details required by manufacturer tools.
- Access to the manufacturer configuration method such as SMS commands or vendor software.
- A Plaspy account and platform access to validate the device after configuration.
- Test environment or staging device to confirm behavior before fleet deployment.

## How This Tracker Connects to Plaspy

The TR-313 is configured to send its location and status messages to the Plaspy server endpoint and port so the platform can receive, identify, and display the device. Once the device is pointed at Plaspy's endpoint, Plaspy's automatic protocol detection interprets the tracker messages and maps them to the correct device record.

- The tracker transmits telemetry to d.plaspy.com or directly to 54.85.159.138 on port 8888.
- Transport can be UDP or TCP depending on the device option selected during setup.
- Plaspy automatically detects the incoming protocol and processes messages for the TR-313.
- After configuration and restart, the device begins reporting and becomes visible in the Plaspy platform.
- Operators can monitor connectivity and event reporting from the Plaspy interface once the device is active.

## Common Configuration Workflow

1. Access the official GlobalSat TR-313 configuration method such as the manufacturer SMS command format or vendor tool.
2. Prepare the device IMEI and any APN placeholders required by your mobile operator.
3. Enter the Plaspy server address by specifying d.plaspy.com or 54.85.159.138 in the server host field.
4. Set the server port to 8888.
5. Choose UDP or TCP transport if the TR-313 configuration requires a transport selection.
6. Apply or save the settings, then reboot or restart the device if required.
7. Validate that the device reports to Plaspy and appears in your Plaspy account with expected updates.

## Example Configuration Commands

The TR-313 can be configured using SMS commands in the manufacturer-provided format. Below are the public example commands extracted from the TR-313 configuration pattern. These commands use placeholders that you must replace with device-specific values before sending.

- Setup command (replace placeholders before sending):

```text
GSS,[imei],3,0,D1=[apn],D2=[apnu],D3=[apnp],E0=54.85.159.138,E1=8888,A1=1*[checksum]!
```

- Reboot command (optional restart after configuration):

```text
GSC,[imei],3,0,LH*[checksumreeboot]!
```

Notes on placeholders and fields:
- [imei]: Replace with the device IMEI number.
- [apn]: Replace with your mobile operator APN name.
- [apnu]: Replace with APN username if required; leave blank if not used.
- [apnp]: Replace with APN password if required; leave blank if not used.
- E0 and E1 in the setup command are set to the public Plaspy server IP 54.85.159.138 and port 8888 respectively.
- The final *[checksum] and *[checksumreeboot] values are computed checksums required by the device command format (see notes below).

Preserve the order of commands when the manufacturer documentation indicates sequence matters: first apply server and APN settings, then optionally reboot the tracker.

## Configuration Notes

- The TR-313 examples use SMS-based configuration strings; ensure SMS delivery and correct IMEI substitution before sending.
- Checksums in the example are commonly computed as an XOR-based hexadecimal checksum of the command body and must be appended in uppercase two-digit hex. The manufacturer example includes a checksum calculation script to produce the correct value.
- Choose UDP or TCP according to available device configuration options; Plaspy accepts either on port 8888 and will auto-detect protocol.
- Firmware revisions and vendor tools may change the exact command syntax or required fields; always cross-check with the latest GlobalSat documentation.
- Rebooting the device after applying settings is often required for them to take effect; the provided reboot command is labeled as an optional follow-up step.

## Why Use Plaspy with This Configuration

Using Plaspy with a properly configured GlobalSat TR-313 provides centralized visibility for personal tracking devices, letting organizations and caregivers monitor location, receive alerts, and manage devices from a single platform. Pointing the TR-313 at Plaspy's shared endpoint and port simplifies onboarding because Plaspy automatically detects the device protocol and handles decoding for supported tracker formats.

To learn more about Plaspy and how it supports trackers like the GlobalSat TR-313, visit https://www.plaspy.com. For the latest device-specific setup methods, firmware behavior, and manufacturer details verify current documentation on the official GlobalSat website https://www.globalsat.com.tw/.
