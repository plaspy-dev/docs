---
slug: /teltonika/fmm920/configuration
id: fmm920-configuration
sidebar_label: Configuration
title: Teltonika - FMM920 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration instructions for Teltonika FMM920 to connect with Plaspy with required server settings and example commands
keywords:
  - Teltonika FMM920 configuration
  - Teltonika FMM920 setup
  - FMM920 server configuration
  - Plaspy device setup
  - GPS tracker configuration
  - Fleet tracking setup
  - Teltonika tracker integration
  - Plaspy server settings
  - Vehicle tracking configuration
  - FMM920 configuration commands
---

# Teltonika - FMM920 Configuration

This page describes the public configuration context for using the Teltonika FMM920 tracker with Plaspy. It focuses on the shared server settings and the practical steps you will use to point the device at Plaspy so location and telemetry are delivered to the Plaspy platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Exact manufacturer side setup steps for the FMM920 can vary by firmware version, hardware revision, installation type, and the Teltonika configuration method you use. Where available we include the public commands and placeholders to help with implementation.

## Configuration Overview

This configuration process prepares an FMM920 unit to report to Plaspy by setting the server endpoint, transport, and any required APN credentials so the device can send telemetry and location updates to the platform.

- Point the tracker to the Plaspy server endpoint so the device can establish outbound connections
- Configure transport and port so data is routed to the Plaspy ingestion endpoint
- Supply APN and authentication placeholders required for cellular connectivity
- Save and apply the device configuration and restart if necessary to start reporting
- Verify visibility in Plaspy once the device begins sending data

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP depending on the device configuration option
- Plaspy automatically detects the tracker protocol and all devices use the same port in Plaspy

## Typical Requirements Before Setup

- A powered and accessible FMM920 unit with any required installation hardware in place
- An active cellular SIM and data plan appropriate for the device regional variant and network availability
- Access to the Teltonika configuration method you will use such as SMS commands or Teltonika configuration tools and Teltonika FOTA WEB for bulk updates
- Knowledge of the correct APN, APN username, and APN password for the SIM in the device
- A Plaspy account and device registration workflow ready to validate that the tracker is reporting to the platform
- Confirmation of the device firmware level if a specific firmware behavior is required for your deployment

## How This Tracker Connects to Plaspy

The FMM920 is configured to send periodic GPS positions and telemetry to the shared Plaspy server endpoint and port so location data appears in the Plaspy dashboard for monitoring and reporting.

- The tracker reports to d.plaspy.com or the IP address 54.85.159.138 using port 8888
- You can select UDP or TCP for transport when the device requires a transport selection
- Plaspy receives telemetry, position updates, and state changes and automatically detects the device protocol for ingestion
- Once configured the device becomes visible in Plaspy and starts feeding live location and telemetry data for alerts and history

## Common Configuration Workflow

1. Access the official Teltonika configuration method you prefer such as SMS commands, the Teltonika configuration tool, or Teltonika FOTA WEB
2. Enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 in the device server field
3. Set the server port to 8888
4. Choose UDP or TCP if the device requires a transport selection
5. Apply or save the configuration on the device and upload changes via the chosen management method
6. Restart the device if the configuration method or firmware requires a restart to apply settings
7. Validate that the device reports to Plaspy and appears in the Plaspy dashboard

## Example Configuration Commands

The FMM920 can be configured using manufacturer style commands. The example below is provided in the public model configuration content and shows how to set APN values along with the Plaspy server domain and port. Placeholders are preserved and explained after the command.

- Example SMS or batch set parameter command

```text
setparam 2001:{{apn}};2002:{{apnu}};2003:{{apnp}};2004:d.plaspy.com;2005:8888;2006:1
```

- Explanation of placeholders and fields
  - {{apn}} is the cellular APN name required for the SIM card
  - {{apnu}} is the APN username if your operator requires one otherwise leave blank
  - {{apnp}} is the APN password if required otherwise leave blank
  - 2004 sets the server domain which in this example is d.plaspy.com
  - 2005 sets the server port which must be 8888 for Plaspy
  - 2006 may represent a server connect mode or activation flag in the device command set depending on Teltonika firmware

Note that the exact command medium and syntax can vary by firmware. The example above is the public form provided for basic parameter setup and is commonly used as an SMS batch command or via Teltonika configuration utilities.

## Configuration Notes

- Firmware differences can change parameter numbers or the exact command syntax so confirm the command mapping for your device firmware level
- Teltonika FOTA WEB and their configuration tools can be used to deploy settings at scale instead of SMS based single device commands
- Choose UDP or TCP based on network characteristics and installer preference though Plaspy will accept either transport on port 8888
- All Plaspy devices use the same port and Plaspy auto detects the tracker protocol so you do not need a device specific port per installation
- Keep APN credentials handy and verify cellular connectivity before checking Plaspy for incoming data

## Why Use Plaspy with This Configuration

Using the Teltonika FMM920 with Plaspy gives organizations consistent, centralized visibility into vehicle location and device telemetry. The shared Plaspy server settings make it straightforward to standardize deployments across a fleet while the platform ingests location, telemetry, and event data for monitoring, alerts, and historical reporting.

To learn more about how Plaspy handles device integrations and fleet monitoring visit https://www.plaspy.com and review the latest device specific setup and firmware details on the manufacturer site https://www.teltonika-gps.com/ . Device specific configuration methods and firmware behavior can change over time so verify the current manufacturer documentation when preparing a deployment.
