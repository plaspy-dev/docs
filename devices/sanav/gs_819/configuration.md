---
slug: /sanav/gs_819/configuration
id: gs_819-configuration
sidebar_label: Configuration
title: Sanav - GS-819 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for the Sanav GS 819 showing Plaspy server settings and practical setup steps for tracker integration
keywords:
  - Sanav GS 819 configuration
  - Sanav GS 819 setup
  - GS 819 Plaspy
  - Plaspy tracker configuration
  - GPS tracker server configuration
  - vehicle tracker setup guide
  - GS 819 SMS commands
  - fleet tracking configuration
  - GS 819 integration guide
  - Sanav tracker configuration
---

# Sanav - GS-819 Configuration

This page documents the public configuration context for using the Sanav GS-819 with Plaspy. It brings together the practical, published steps and example SMS commands used to prepare the GS-819 so it can report location and status to the Plaspy platform. Use this guide to understand what values Plaspy expects and how the device can be set up using the manufacturer supported methods.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while the exact manufacturer side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. The GS-819 supports GPRS, 3G, and SMS configuration methods, and the examples below are based on public SMS commands and settings commonly used in initial device provisioning.

## Configuration Overview

This configuration process prepares the GS-819 to communicate reliably with Plaspy by setting the operator APN, the platform server endpoint, the data route, and the reporting interval. The goal is to enable the device to send position updates and status messages to Plaspy so the unit becomes visible and manageable from the platform.

- Configure the device APN and credentials so the tracker can establish a GPRS session.
- Set the Plaspy server endpoint so telemetry is delivered to the platform.
- Select the correct transport and data route for the device to send tracked data.
- Define a suitable reporting interval so Plaspy receives timely position updates.
- Validate connectivity and confirm the device appears in Plaspy after configuration.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

## Typical Requirements Before Setup

- A charged and installed GS-819 with antennas and power connected per the manufacturer instructions.
- A SIM card with active data and SMS capability and the correct APN credentials for the mobile operator.
- Access to the manufacturer supported configuration method such as SMS commands, COTA, or PC software.
- Knowledge of the device password if required for configuration; the public sample commands use the default password 0000.
- A workstation or phone capable of sending SMS messages to the device if using SMS based setup.

## How This Tracker Connects to Plaspy

The GS-819 can report position and device events to Plaspy over GPRS or 3G data channels. When configured to use the Plaspy server endpoint, the unit establishes a connection and transmits telemetry to the shared Plaspy server and port for automatic processing and display in the platform.

- The device is configured to send data to d.plaspy.com or the Plaspy server IP 54.85.159.138 on port 8888.
- Transport can be UDP or TCP depending on firmware and configuration, and Plaspy will accept either.
- Plaspy uses the same port for all supported devices and automatically detects the tracker protocol.
- Regular position updates make the unit visible in Plaspy for tracking and operational monitoring.
- Status messages and event reports are forwarded to the platform so users can act on alerts and changes.

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software (SMS commands, COTA, or PC tool) provided by Sanav.
2. Enter the Plaspy server endpoint using either d.plaspy.com or the IP address 54.85.159.138 as the server destination.
3. Set the port to 8888 in the device configuration.
4. Choose UDP or TCP if the device requires an explicit transport selection.
5. Enter operator APN and credentials so the tracker can establish a data connection.
6. Apply or save the configuration and restart the device if required by the firmware or instructions.
7. Validate that the device reports to Plaspy by checking device connectivity and visibility in the platform.

## Example Configuration Commands

The GS-819 can be configured via SMS commands. Below are the public example commands and their order as provided in the device documentation. The device password used in these commands is the default 0000 in the public examples. Replace placeholders as needed before sending.

- Factory reset (optional initial step)
```text
#username,0000,9*
```

- Set the operator APN and credentials
```text
#username,0000,3,[apn],[apnu],[apnp]*
```
Explanation: [apn] is the operator APN, [apnu] is the APN username if required, and [apnp] is the APN password if required. Leave username or password empty in the command if the operator does not require them.

- Set the GPRS server to Plaspy using the public server IP and port
```text
#username,0000,18,54.85.159.138:8888*
```
Explanation: This command points the GS-819 to the Plaspy server endpoint and port. Alternatively use the domain d.plaspy.com if the device firmware accepts hostnames.

- Set the route for data transmission
```text
#username,0000,14,9*
```
Explanation: This command configures the data route used by the tracker. Preserve the order shown above when performing initial setup.

- Set update interval to 60 seconds
```text
#username,0000,6,60,9999*
```
Explanation: This command configures automatic reporting intervals. Adjust the numeric values to suit operational needs and any manufacturer constraints.

Note: Keep the device password and username placeholders intact and replace them with the actual values configured on your device. The default password shown in public examples is 0000.

## Configuration Notes

- SMS based configuration is supported and commonly used for initial provisioning; PC software and COTA may offer more convenient bulk or remote options.
- Firmware revisions and hardware variants can change the exact SMS command set or parameter order; verify commands against the device manual before wide deployment.
- Plaspy accepts both UDP and TCP on the shared port 8888; choose the transport that matches the device firmware capability and operator network behavior.
- Always change default passwords after provisioning in an environment where security and access control are important.
- If a hostname is used instead of an IP, confirm the device firmware supports DNS resolution for the configured server name.

## Why Use Plaspy with This Configuration

Using the Sanav GS-819 with Plaspy provides a straightforward path to fleet visibility and operational monitoring. The GS-819’s support for GPRS, 3G, and SMS configuration methods and its programmable reporting features make it well suited to send location and status updates to Plaspy for tracking, alerts, and historical analysis.

To learn more about how Plaspy can manage devices like the GS-819, visit https://www.plaspy.com. For the most current device specific setup details, firmware notes, and manufacturer documentation please verify information on the official Sanav site http://es.sanav.com/ as manufacturer procedures and firmware behavior can change over time.
