---
slug: /teltonika/fmb110/configuration
id: fmb110-configuration
sidebar_label: Configuration
title: Teltonika - FMB110 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Teltonika FMB110 and Plaspy compatibility with example commands and server settings
keywords:
  - Teltonika FMB110 configuration
  - Teltonika FMB110 setup
  - FMB110 Plaspy setup
  - GPS tracker configuration Plaspy
  - Teltonika tracker server configuration
  - FMB110 GPS platform setup
  - vehicle tracking configuration
  - FMB110 telemetry setup
  - Teltonika device configuration
  - Plaspy compatible tracker
---

# Teltonika - FMB110 Configuration

This page provides the public configuration context for using the Teltonika FMB110 with the Plaspy platform. It summarizes the practical settings and workflow to prepare an FMB110 to report location and telemetry to Plaspy using the shared server settings that Plaspy requires.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Exact manufacturer side steps can vary by firmware version, hardware revision, installation type, and vendor tools such as Teltonika Configurator or SMS commands. Use this page as a practical reference and consult official manufacturer documentation for device specific details.

## Configuration Overview

The goal of this configuration is to point the FMB110 at Plaspy’s collection endpoint, provide any required cellular APN credentials, choose transport, and validate that the device appears in Plaspy. The public command example below demonstrates how basic parameters are often applied in bulk.

- Set the device APN and credentials so it can use cellular data for telemetry
- Configure the server endpoint and port to point the tracker at Plaspy
- Choose the transport mode if the device requires a UDP or TCP selection
- Save and apply configuration and restart the device when required
- Validate connectivity so the device appears in Plaspy dashboards and reports

## Plaspy Server Settings

Use the following public Plaspy server settings when configuring the FMB110:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport may be configured as UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and all devices use the same port

## Typical Requirements Before Setup

- Power the device with a proper vehicle power connection or installation power source
- A working cellular SIM with data enabled and correct APN information for the network operator
- Access to the Teltonika configuration method you intend to use such as Teltonika Configurator, SMS commands, or FOTA Web
- Knowledge of APN, APN username, and APN password for the installed SIM
- Access to Plaspy account or device provisioning instructions to confirm the device on the platform
- Confirm device firmware is up to date and check Teltonika release notes for relevant changes

## How This Tracker Connects to Plaspy

When configured, the FMB110 sends GNSS and device telemetry over the cellular network to Plaspy’s shared server endpoint. Plaspy ingests the incoming protocol and exposes location and event data in maps, alerts, and reports.

- The tracker is set to report to the shared Plaspy server endpoint and port
- Telemetry and position updates are delivered to Plaspy where they become visible in real time
- Events and status updates (ignition, inputs, sensor readings) are forwarded to the Plaspy platform
- Plaspy detects the incoming protocol automatically and processes the tracker data without per device port changes
- Platform visibility supports monitoring, alerts, and basic remote actions exposed by Plaspy

## Common Configuration Workflow

1. Access the official Teltonika configuration method such as Teltonika Configurator, SMS commands, or FOTA Web
2. Enter the Plaspy server as d.plaspy.com or use the server IP 54.85.159.138 where allowed
3. Set the server port to 8888 (Plaspy uses the same port for all supported devices)
4. Choose UDP or TCP if the device requires a transport selection
5. Provide APN, APN user, and APN password values appropriate for the SIM
6. Apply or save the configuration and restart the device if required by the tool or firmware
7. Validate that the device reports to Plaspy and appears in the platform dashboards and reports

## Example Configuration Commands

To configure basic parameters on an FMB110, Teltonika devices commonly accept a parameter batch command. The following public example sets APN values, the Plaspy domain, port, and a transport parameter. Preserve the placeholders when adapting to your network.

- Example batch parameter command (preserve placeholders):

```text
setparam 2001:[apn];2002:[apnu];2003:[apnp];2004:d.plaspy.com;2005:8888;2006:1
```

- What the placeholders mean
  - [apn] : APN name for the SIM card provider
  - [apnu] : APN username if required by the operator
  - [apnp] : APN password if required by the operator

Note: This example shows the use of d.plaspy.com and port 8888 as required by Plaspy. The final parameter in the batch often selects transport mode or other device behavior. Consult Teltonika documentation or the Configurator for the exact meaning of numbered parameters and accepted values for your firmware version.

## Configuration Notes

- Teltonika firmware revisions may change parameter numbering or acceptable values; verify the exact parameter mapping for your firmware before applying bulk commands
- You can use the domain d.plaspy.com or the server IP 54.85.159.138 when pointing the device to Plaspy; both resolve to the same Plaspy endpoint and port 8888
- When a device tool requires explicit transport selection, choose either UDP or TCP based on installer preference; Plaspy accepts both on port 8888 and automatically detects the protocol
- The provided batch command is a public example and is commonly applied via SMS or configuration tools depending on installer practice
- Always test a single device before deploying mass configuration changes to a fleet

## Why Use Plaspy with This Configuration

Using the Teltonika FMB110 with Plaspy gives organizations a compact, cost effective telemetry endpoint that integrates into a shared Plaspy server architecture. With the server settings centralized at d.plaspy.com and port 8888, installers can apply a consistent configuration across many devices and rely on Plaspy to auto detect incoming protocols and present device data in maps, alerts, and reports.

Learn more about Plaspy and platform capabilities at https://www.plaspy.com. For device specific configuration steps, firmware behavior, and the latest parameter references verify details with Teltonika on their official site https://www.teltonika-gps.com/
