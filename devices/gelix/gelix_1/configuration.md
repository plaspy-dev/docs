---
slug: /gelix/gelix_1/configuration
id: gelix_1-configuration
sidebar_label: Configuration
title: Gelix - Gelix 1 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Gelix 1 setup with Plaspy showing server settings and practical integration steps
keywords:
  - Gelix 1 configuration
  - Gelix 1 setup
  - Gelix GPS logger configuration
  - Gelix Plaspy compatibility
  - Gelix server configuration
  - GPS tracker configuration
  - vehicle tracking setup
  - passive GPS logger setup
  - dispatcher data retrieval
  - Gelix Bluetooth data retrieval
---

# Gelix - Gelix 1 Configuration

This page provides the public configuration context for using the Gelix 1 tracker with Plaspy. It explains how the Gelix 1 operates as a passive monitoring GPS data logger, the common retrieval methods for stored navigation and event data, and what practical steps are required to integrate its data flow with the Plaspy platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol used by incoming connections. Exact manufacturer side setup steps for the Gelix 1 can vary by firmware version, hardware revision, installation type, and vendor configuration tools, so follow this guide for the public Plaspy settings and general workflow while consulting Gelix documentation for device specific instructions.

## Configuration Overview

This configuration is focused on preparing the Gelix 1 data retrieval path so that recorded logs and events become visible and usable in Plaspy. Because Gelix 1 is primarily a passive logger that provides multiple retrieval options, the integration commonly involves configuring the retrieval system or dispatcher software to forward the collected data to Plaspy.

- Configure the retrieval endpoint so stored logs are forwarded to the Plaspy server.
- Validate connectivity from the retrieval point to Plaspy and confirm the tracker records are processed.
- Ensure the transport setting matches the retrieval system capability by choosing UDP or TCP as needed.
- Save and apply settings on the manufacturer tool or dispatcher software and verify that Plaspy receives data.
- Confirm visibility of device records and events in Plaspy after a successful transfer.

## Plaspy Server Settings

Use the following public server settings when configuring the Gelix 1 retrieval tool or dispatcher software to forward recorded data to Plaspy:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP; the device may be configured using UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

## Typical Requirements Before Setup

- Access to the Gelix 1 configuration or retrieval tool provided by the manufacturer or vendor.
- A functioning data retrieval infrastructure such as a dispatcher PC, PDA, or radio access point for Bluetooth or RF collection.
- Power to the device and confirmation that the Gelix 1 has recorded data available for retrieval.
- Network connectivity from the retrieval system or dispatcher software to the internet so it can reach d.plaspy.com or 54.85.159.138.
- Administrative access to the dispatcher or PC software to enter the Plaspy endpoint and port.
- A test plan to validate a successful transfer and visibility of records in Plaspy.

## How This Tracker Connects to Plaspy

Because the Gelix 1 is a passive logger, the typical pattern is to retrieve stored data from the unit and forward that collected data to the Plaspy server. The retrieval mechanism can be local or remote, and the forwarding endpoint must be configured to point to Plaspy's shared server and port so records are processed automatically.

- The Gelix 1 records navigation and event data while in active motion or when an external event occurs.
- Data retrieval occurs via a radio access point in the garage or parking area, or via wired, IrDA, or Bluetooth exchange using a PDA or PC.
- The retrieval system or dispatcher software forwards the stored logs to d.plaspy.com or 54.85.159.138 on port 8888.
- Forwarding can use UDP or TCP depending on the retrieval tool and configuration; Plaspy automatically detects the incoming tracker protocol.
- Once forwarded, the device records and events become visible and actionable in the Plaspy platform for monitoring and reporting.

## Common Configuration Workflow

1. Access the official Gelix configuration method or vendor software used for retrieving data from the Gelix 1.
2. In the retrieval software or dispatcher tool enter the Plaspy server as d.plaspy.com or alternatively enter 54.85.159.138.
3. Set the destination port to 8888 which is the shared Plaspy port used for all supported devices.
4. Choose UDP or TCP if the retrieval tool requires a transport selection; the device may be configured using UDP or TCP on port 8888.
5. Apply or save the configuration in the manufacturer or dispatcher software.
6. Restart the retrieval software or device if the tool requires a restart to apply network settings.
7. Validate that records are transmitted and that the device appears in Plaspy by checking for newly received logs or events.

## Example Configuration Commands

The Gelix 1 is typically configured through the manufacturer provided retrieval tools or dispatcher software rather than by direct AT style commands. Exact commands and procedures vary by firmware and vendor tools. Use the official Gelix configuration utility or your dispatcher software and set the Plaspy server values shown in this guide. If your vendor provides command line or SMS style configuration, follow their documented command syntax and substitute the Plaspy hostname or IP and port accordingly.

If you have vendor supplied commands or scripts for your deployment, include them in the exact order recommended by the manufacturer and preserve any placeholders they require.

## Configuration Notes

- Firmware and vendor tool versions can change the exact configuration screens or available options. Verify the UI or command syntax with current Gelix documentation.
- Choose UDP or TCP based on the retrieval system capability and any local network constraints. Plaspy will automatically detect the tracker protocol when data arrives.
- For radio access point deployments confirm the AP software is configured to forward collected Gelix 1 logs to the Plaspy endpoint and port.
- When using a PDA or cable transfer workflow, ensure the intermediary software is able to reach the public Plaspy server over your network.
- Keep a small test dataset and confirm successful ingestion in Plaspy before rolling out a large number of devices.

## Why Use Plaspy with This Configuration

Using Plaspy to receive and process Gelix 1 data centralizes stored navigation and event logs into a single platform for monitoring, historical analysis, and operational oversight. Organizations that depend on periodic data retrieval can benefit from forwarding collected logs into Plaspy to build consolidated reports, trigger post processing, and maintain a searchable archive of device activity.

Learn more about Plaspy and how it can integrate with logging devices at https://www.plaspy.com. Please verify the latest Gelix 1 device specific setup details and any manufacturer supplied configuration methods on the official Gelix website http://www.gelix.com/ as firmware behavior and configuration procedures can change over time.
