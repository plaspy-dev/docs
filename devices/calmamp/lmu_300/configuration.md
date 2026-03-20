---
slug: /calmamp/lmu_300/configuration
id: lmu_300-configuration
sidebar_label: Configuration
title: CalmAmp - LMU-300 Configuration
sidebar_class_name: menu_item_tracker
description: Public technical guide for CalmAmp LMU 300 configuration with Plaspy server settings and SMS commands
keywords:
  - CalmAmp LMU 300 configuration
  - CalmAmp LMU 300 setup
  - CalmAmp LMU 300 server configuration
  - LMU 300 Plaspy setup
  - LMU 300 GPS tracker configuration
  - CalmAmp tracker SMS setup
  - vehicle tracking configuration
  - GPS platform setup
  - fleet tracking CalmAmp LMU 300
  - CalmAmp PULS integration
---

# CalmAmp - LMU-300 Configuration

This page covers the public configuration context for using the CalmAmp LMU-300 tracker with Plaspy. It explains the practical server settings and common setup steps that let the LMU-300 report to Plaspy, and it presents the publicly available SMS-based commands that are commonly used for initial configuration.

Plaspy uses a shared server endpoint and port across supported devices and automatically detects the tracker protocol, while the exact manufacturer side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. The LMU-300 supports SMS and over the air provisioning options in manufacturer flows, and the commands shown here are the published SMS commands used to set APN and server values when configuring the device for Plaspy.

## Configuration Overview

The goal of configuration is to prepare the LMU-300 to communicate reliably with Plaspy so the device appears and reports correctly in your fleet view. Configuration typically sets network APN parameters, the Plaspy server endpoint and port, and verifies the device is sending data after a reboot.

- Set the mobile operator APN and optional APN username and password so the device can establish a GPRS data session.
- Configure the Plaspy server address so the LMU-300 sends telemetry to the Plaspy endpoint.
- Set the server port used by Plaspy and choose transport (UDP or TCP) when the device requires it.
- Reboot or restart the device so new parameters take effect and then validate the device is visible in Plaspy.
- Use the device MID and verification commands to confirm settings after configuration.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

These values are the public Plaspy settings to enter on the device or via SMS so the LMU-300 reports to the Plaspy platform.

## Typical Requirements Before Setup

- A powered and installed LMU-300 with a working SIM card and data enabled if using GPRS.
- Access to the device phone number for sending SMS configuration commands, or access to the vendor provisioning tool such as PULS if you will use OTA configuration.
- The device MID (10 digits) as reported by the device in response to the !R0 command so you can include the ID when required by the device.
- The mobile operator APN and any APN username or password required by the SIM.
- A way to receive device replies or confirmation messages after sending SMS commands.
- Access to the official CalmAmp documentation and configuration tools for your firmware and hardware revision.

## How This Tracker Connects to Plaspy

The LMU-300 is configured to report location and status messages to the shared Plaspy server endpoint and port, enabling device visibility and event monitoring in the Plaspy platform. Once configured, the device establishes a data session to the operator APN and sends telemetry to the configured Plaspy endpoint.

- The device is set to send data to d.plaspy.com or directly to 54.85.159.138.
- Plaspy receives the device telemetry on port 8888 for all supported devices.
- Plaspy detects the tracker protocol automatically so you do not need to select a protocol on the server side.
- The tracker will use the selected transport (UDP or TCP) if the device requires an explicit choice.
- After configuration and reboot the tracker should start sending periodic reports and event messages to Plaspy.

## Common Configuration Workflow

1. Access the official CalmAmp configuration method for your unit such as SMS commands or the vendor provisioning tool PULS depending on your deployment and firmware.  
2. Obtain the device MID by sending the device the !R0 command and record the reported 10 digit ID if the device requires an ID for SMS commands.  
3. Enter the Plaspy server as either d.plaspy.com or 54.85.159.138 in the device configuration.  
4. Set the server port to 8888 in the device configuration.  
5. Choose UDP or TCP if the LMU-300 firmware requires you to select a transport protocol.  
6. Apply or save the configuration and perform a device restart or reboot if required.  
7. Validate that the device reports to Plaspy and is visible on the platform; check for expected telemetry or status messages.

## Example Configuration Commands

The LMU-300 public SMS commands for basic setup are published by CalmAmp. Send these commands by SMS to the device. The device expects the ID to be the MID 10 digits reported by the !R0 command when an ID is required.

- Obtain the device MID
```text
!R0
```
- Set the operator APN
```text
!RP,2306,0,[apn]
```
- Set the APN operator username (if applicable)
```text
!RP,2314,0,[apnu]
```
- Set the APN operator password (if applicable)
```text
!RP,2315,0,[apnp]
```
- Set the GPRS server to Plaspy by IP
```text
!RP,2319,0,54.85.159.138
```
- Set the server port to Plaspy port
```text
!RP,769,0,8888
```
- Reboot the tracker to apply settings
```text
!R3,70,0
```
- Check the current settings
```text
!RO
```

Notes on placeholders and usage:
- [apn] is a placeholder for your mobile operator APN string.
- [apnu] and [apnp] are placeholders for APN username and APN password if your operator requires them.
- Preserve the order above: set APN first, then server and port, then reboot.
- If the device requires including the 10 digit MID as an ID prefix in SMS commands, include it as per device requirements after obtaining it with !R0.

## Configuration Notes

- Firmware and hardware revisions may change the exact command format or available command IDs; always confirm with current CalmAmp documentation for your unit.
- The LMU-300 supports SMS based configuration flows as shown, and may also support OTA provisioning via CalmAmp PULS for large scale or remote updates.
- Choose UDP or TCP transport according to the LMU-300 firmware options and your network environment; Plaspy accepts either on port 8888.
- All devices reporting to Plaspy use the same port 8888 and Plaspy will automatically detect the tracker protocol.
- Keep APN credentials and device MID handy during setup to reduce configuration time.

## Why Use Plaspy with This Configuration

Using the CalmAmp LMU-300 configured for Plaspy provides a straightforward path to fleet visibility and event based monitoring. The LMU-300’s flexible configuration options plus Plaspy’s automatic protocol detection make it practical to bring devices online quickly and ensure data flows to a single, shared endpoint for processing and display.

To learn more about Plaspy and how to onboard devices for fleet tracking visit https://www.plaspy.com. Please verify the latest device specific setup steps, firmware behavior, and manufacturer guidance at CalmAmp support http://www.calamp.com/ as vendor documentation and commands can change over time.
