---
slug: /teltonika/fmc640/configuration
id: fmc640-configuration
sidebar_label: Configuration
title: Teltonika - FMC640 Configuration
sidebar_class_name: menu_item_tracker
description: Setup guide for configuring the Teltonika FMC640 to report to Plaspy using shared server settings and example commands
keywords:
  - Teltonika FMC640 configuration
  - Teltonika FMC640 setup
  - FMC640 Plaspy
  - FMC640 server configuration
  - Teltonika tracker configuration
  - FMC640 GPS setup
  - FMC640 tracking software configuration
  - Fleet tracking FMC640
  - Teltonika GPS platform setup
  - Plaspy device configuration
---

# Teltonika - FMC640 Configuration

This page documents the public configuration context for using the Teltonika FMC640 with Plaspy. It focuses on the shared Plaspy server settings and the practical steps and example commands you can use to point an FMC640 device at the Plaspy endpoint. Where applicable we include an example SMS configuration command provided in public model configuration notes.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Exact manufacturer side setup steps can vary by firmware version, hardware revision, installation type, or vendor tools such as Teltonika Configurator or SMS commands. Use this page as a practical starting point and verify device specific details with official Teltonika documentation when needed.

## Configuration Overview

The goal of configuration is to prepare the FMC640 so it reliably reports position and status to the Plaspy platform. This involves setting the device APN and server endpoint, choosing the transport method if required, and validating connectivity so the asset becomes visible in Plaspy.

- Configure APN credentials so the device has an active data connection or SMS capability for remote commands.
- Point the device to the Plaspy server domain or IP and set the shared port used by Plaspy.
- Select the transport mode supported by your installation if the device requires a transport choice.
- Apply and save settings using Teltonika Configurator, SMS, or another official method, then validate reporting in Plaspy.
- Confirm device visibility and basic telemetry in the Plaspy platform after a successful connection.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

These values are the public Plaspy connection settings used for FMC640 devices. Plaspy uses the same port for all supported devices and will attempt to detect the tracker protocol automatically.

## Typical Requirements Before Setup

- Reliable power to the FMC640 and a completed hardware installation according to Teltonika guidance.
- A working SIM with data and optionally SMS capability if you plan to use SMS configuration commands.
- Access to the official Teltonika configuration method you prefer such as Teltonika Configurator, FOTA Web, or SMS commands.
- APN credentials for the mobile operator represented by placeholders such as [apn], [apnu], and [apnp].
- Access to Plaspy account or onboarding details so you can confirm the device appears after configuration.
- Basic knowledge of whether your installation will use UDP or TCP transport for tracker-server communication.

## How This Tracker Connects to Plaspy

When configured, the FMC640 sends device and position data to the shared Plaspy server endpoint and port so the device becomes visible and trackable in the platform. Plaspy handles detection of the device protocol and allows the incoming data to be processed for monitoring and reporting.

- The device reports to d.plaspy.com (or the IP 54.85.159.138) on port 8888.
- Data is transmitted over the chosen transport, UDP or TCP, depending on your configuration choice.
- Plaspy automatically detects the tracker protocol and associates incoming data with the device record.
- Once connected, location updates and device events become available for fleet monitoring and operational oversight.

## Common Configuration Workflow

1. Access the official Teltonika configuration method such as Teltonika Configurator, FOTA Web, or SMS command interface.
2. Set the device APN credentials using the placeholders provided for your operator (for example [apn], [apnu], [apnp]).
3. Enter the Plaspy server endpoint either as d.plaspy.com or 54.85.159.138 depending on your preference.
4. Set the port to 8888 as Plaspy uses the same port for all supported devices.
5. Choose UDP or TCP if the device requires explicit transport selection.
6. Apply or save the configuration and restart the device if required by the manufacturer procedure.
7. Validate that the FMC640 reports successfully to Plaspy and that the device becomes visible in your Plaspy account.

If you use SMS for configuration, follow Teltonika instructions for sending SMS commands securely. If you use the Configurator, follow the recommended workflow and firmware compatibility notes.

## Example Configuration Commands

The public model configuration provides an example SMS command to set basic parameters on the device. Preserve placeholders and replace them with your operator specific values when sending the command.

- Example SMS configuration command

```text
setparam 2001:[apn];2002:[apnu];2003:[apnp];2004:d.plaspy.com;2005:8888;2006:1
```

Notes on the example command:
- [apn] is the mobile operator APN name.
- [apnu] is the APN username when required by the operator.
- [apnp] is the APN password when required by the operator.
- The command includes d.plaspy.com as the server and 8888 as the port to point the device at the Plaspy endpoint.
- Parameter 2006 relates to transport selection or protocol settings on the device. Confirm the correct value for your firmware and transport choice using Teltonika documentation before changing it.

Send the command via SMS to the device phone number or use Teltonika Configurator if you prefer a software interface. Always confirm the device accepted the new parameters and restarted if required.

## Configuration Notes

- Teltonika firmware versions and parameter mappings may differ. Verify parameter numbers and allowed values in the Teltonika FMC640 documentation before sending commands.
- SMS configuration is a convenient public option but confirm device access and command authorization to avoid unintended changes.
- Choose UDP or TCP based on your network and server requirements; Plaspy supports both and will auto detect the protocol.
- Plaspy uses port 8888 for all devices so you do not need unique ports per tracker.
- Always keep firmware and tools updated according to Teltonika release notes to ensure compatibility.

## Why Use Plaspy with This Configuration

Using the Teltonika FMC640 with Plaspy provides a straightforward path to fleet visibility and operational monitoring. Pointing the device to the shared Plaspy server endpoint and port allows location updates and device events to flow into a single platform where they can be monitored, analyzed, and used to improve dispatching, route planning, and asset security.

To learn more about Plaspy and how it processes tracker data visit https://www.plaspy.com. For the latest device specific methods, firmware behavior, and parameter definitions verify current details on the manufacturer site https://www.teltonika-gps.com/
