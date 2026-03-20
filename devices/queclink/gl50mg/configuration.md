---
slug: /queclink/gl50mg/configuration
id: gl50mg-configuration
sidebar_label: Configuration
title: QuecLink - GL50MG Configuration
sidebar_class_name: menu_item_tracker
description: Public guide to configure the QuecLink GL50MG for use with Plaspy including required server settings SMS commands and workflow
keywords:
  - QuecLink GL50MG configuration
  - QuecLink GL50MG setup
  - QuecLink GL50MG Plaspy
  - GL50MG server configuration
  - GL50MG SMS commands
  - GL50MG APN setup
  - QuecLink asset tracker configuration
  - GL50MG GPS tracker setup
  - Plaspy tracker configuration
  - vehicle tracking GL50MG
---

# QuecLink - GL50MG Configuration

This page documents the public configuration context for using the QuecLink GL50MG tracker with Plaspy. It covers the shared Plaspy server settings, practical setup workflow, and example SMS commands provided in public QuecLink guidance so you can prepare the device to report to Plaspy for live tracking and alerting.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but exact manufacturer-side steps can vary by firmware version, hardware revision, installation type, and vendor configuration tools. The GL50MG is commonly configured via SMS commands in the public model configuration content below; use those commands as examples and verify details with the official QuecLink documentation for your firmware and hardware variant.

## Configuration Overview

Configuring the GL50MG for Plaspy prepares the tracker to send location and event data to the Plaspy ingestion endpoint so devices appear and report reliably in the Plaspy platform. The public QuecLink configuration items include SMS-based commands to restore settings, set APN credentials, point the device at the Plaspy server, and tune the reporting interval and input behavior.

- Point the device to Plaspy server endpoint so telemetry is routed to Plaspy mapping and alerting.
- Provide APN credentials so the GL50MG can connect to cellular data networks as required.
- Set a sensible reporting interval and enable inputs like SOS to forward events to Plaspy.
- Validate connectivity and visibility in Plaspy after applying changes.
- Use manufacturer tools or SMS commands shown below as the basis for configuration and verification.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

These values are the public Plaspy endpoint settings to use when configuring the GL50MG so that telemetry is received and parsed by Plaspy.

## Typical Requirements Before Setup

- A charged GL50MG device with an active SIM provisioned for data if cellular reporting is used.
- Ability to send SMS commands to the device if using the SMS configuration method shown in the public commands.
- APN credentials for the SIM operator, often expressed as [apn], [apnu], and [apnp] placeholders in manufacturer commands.
- Access to QuecLink configuration instructions or software for your specific firmware version and hardware revision.
- Basic knowledge of whether your deployment prefers UDP or TCP transport for device-to-server connections.
- A way to observe device reports in Plaspy to confirm the device is online after configuration.

## How This Tracker Connects to Plaspy

When configured for Plaspy the GL50MG sends periodic location updates and event messages to the shared Plaspy endpoint and port where Plaspy ingests, interprets, and displays data. Plaspy’s automatic protocol detection means you only need to point the device at the Plaspy server address and port; Plaspy will detect the tracker protocol.

- Location and heartbeat reports are sent to d.plaspy.com on port 8888 using UDP or TCP.
- SOS or programmable button events can be configured to generate immediate notifications to Plaspy.
- APN and GPRS settings allow the device to obtain cellular data connectivity before sending telemetry.
- Regular reporting intervals (for example 60 seconds in public examples) control how frequently the device updates Plaspy.
- Plaspy receives those messages and makes the device visible for mapping, historical playback, and alert workflows.

## Common Configuration Workflow

1. Access the official QuecLink configuration method for your GL50MG, for example the SMS command interface described by the manufacturer or an authorized software tool.
2. Enter the Plaspy server domain d.plaspy.com or the Plaspy server IP 54.85.159.138 into the device server settings.
3. Set port 8888 for device reporting as required by Plaspy.
4. If the device requires a transport selection, choose UDP or TCP according to your network and device preferences.
5. Configure APN credentials and any other network items such as time zone or input behavior.
6. Apply or save the configuration and restart the device if required by the device or firmware.
7. Validate that the device reports to Plaspy by confirming the device appears online and sends location or event messages in the Plaspy platform.

## Example Configuration Commands

The following commands are the public SMS commands derived from QuecLink guidance. They are presented in order and use the device password queclink as the example default password. Send these as SMS messages to the device phone number where SMS configuration is supported. Keep placeholders such as [apn], [apnu], and [apnp] and replace them with your operator values.

1. Optional initial factory restore command
```
AT+GTRTO=queclink,4,,,,,,FFFF$
```
- Restores factory settings. Label this as optional and use only if a reset is required before a clean configuration.

2. Set the time zone to UTC 0
```
AT+GTTMA=queclink,+,0,0,0,,,,,,FFFF$
```
- Adjust the time zone parameters as needed for your deployment.

3. Set the operator APN
```
AT+GTBSI=queclink,[apn],[apnu],[apnp],,,,,FFFF$
```
- Replace [apn] with the mobile operator APN, [apnu] with the APN username if required, and [apnp] with the APN password if required. Keep placeholders intact until you substitute real values.

4. Set the GPRS server to Plaspy
```
AT+GTSRI=queclink,4,,1,d.plaspy.com,8888,54.85.159.138,8888,,0,0,0,,,,FFFF$
```
- This public command includes both the Plaspy server domain d.plaspy.com and the Plaspy server IP 54.85.159.138 and configures port 8888. The device may accept either domain or IP; both are shown in the example.

5. Set the periodic update interval to 60 seconds
```
AT+GTFRI=queclink,1,1,0,0,,,60,60,60,60,7F,40,0,,,FFFF$
```
- This command sets the device to report at a 60 second interval in the public example. Adjust intervals based on battery life and operational needs.

6. Enable SOS button notification on input 2
```
AT+GTSOS=queclink,2,2,,0,0,0,0,0,0,,,FFFF$
```
- Configures a programmable input (SOS) for immediate event reporting.

Note: These commands reflect public QuecLink examples. Exact syntax and required fields may vary by firmware revision. Verify the correct command format for your GL50MG firmware before sending.

## Configuration Notes

- QuecLink firmware versions and regional device variants can change the available commands and parameters; always verify against the official QuecLink documentation for your device revision.
- The public SMS-based setup above is one common method; some deployments use manufacturer software or configuration tools instead of SMS.
- Choose UDP or TCP transport based on your network reliability and device behavior; Plaspy accepts both and will automatically detect the tracker protocol after the device points to d.plaspy.com on port 8888.
- Keep APN credentials and device passwords secure and change default passwords if supported by your workflow.
- After applying configuration, confirm the device appears and reports correctly in Plaspy before completing installation.

## Why Use Plaspy with This Configuration

Using the GL50MG with Plaspy provides a straightforward path to real-time visibility, alerting, and operational monitoring for assets that require long battery life and discreet installation. With the public configuration commands you can point the device to Plaspy and enable periodic reporting and emergency inputs so the device becomes visible within Plaspy mapping and workflow features.

Learn more about Plaspy and how it handles device ingestion and fleet monitoring at https://www.plaspy.com. For the most current QuecLink device commands, firmware notes, and model specific documentation verify setup and command syntax on the manufacturer site https://www.queclink.com/ as manufacturer specifications and firmware behavior can change over time.
