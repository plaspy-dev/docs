---
slug: /supermate/d12_g/configuration
id: d12_g-configuration
sidebar_label: Configuration
title: Supermate - D12-G Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Supermate D12 G tracker showing Plaspy server settings workflow and practical setup notes
keywords:
  - Supermate D12 G configuration
  - Supermate D12 G setup
  - Supermate tracker Plaspy
  - D12 G server configuration
  - D12 G GPS setup
  - fleet tracking configuration
  - asset tracker setup guide
  - Plaspy integration guide
  - GPS tracker platform setup
  - vehicle tracking configuration
---

# Supermate - D12-G Configuration

This page describes the public configuration context for using the Supermate D12-G tracker with Plaspy. It collects the practical server settings, workflow steps, and setup considerations that are commonly used when integrating this model with the Plaspy platform. Use this guide alongside the device documentation from the manufacturer for device specific instructions.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when the device reports to the platform. Exact manufacturer side steps can vary by firmware, hardware revision, installation type, and vendor tools, so confirm device specific procedures before making changes. The Supermate D12 series is designed for real time tracking, geo fencing, and SOS alerts, and those features are typically usable once the device is configured to report to the Plaspy server endpoint.

## Configuration Overview

This configuration prepares a Supermate D12-G to communicate reliably with the Plaspy tracking platform by directing its outbound reporting to the Plaspy server and verifying connectivity and reporting behavior.

- Point the tracker to the Plaspy server endpoint so location and event messages are routed to Plaspy.
- Set the device transport and port to match Plaspy settings and save the change in the device tool.
- Validate that the device has cellular connectivity and is able to reach the configured server.
- Confirm that location updates, SOS and geo fence events are visible in Plaspy after the device reports.
- Restart or power cycle the device if required by the manufacturer tool to apply new settings.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP depending on device configuration
- Plaspy automatically detects the tracker protocol when the device connects
- Plaspy uses the same port 8888 for all supported devices so you only need to set the device port once

## Typical Requirements Before Setup

- A charged and installed Supermate D12-G device ready for configuration
- Access to the official Supermate configuration tool or SMS commands as provided by the manufacturer
- An active SIM card with data (or the connectivity method supported by the device) and network coverage
- A means to test and observe device reporting such as a Plaspy account or connection log
- Physical access to the device for restarting or performing a configuration reset if needed

## How This Tracker Connects to Plaspy

The D12-G sends its outbound tracking and event messages to the Plaspy server address and port, where Plaspy automatically interprets the incoming protocol and displays device telemetry.

- Configure the device to report to the Plaspy server domain or IP endpoint
- Use port 8888 as the device port so messages arrive on the expected Plaspy port
- Choose UDP or TCP as the transport if the device requires an explicit selection
- Plaspy receives the messages and automatically detects the tracker protocol to decode telemetry
- Once reporting is established you will see location updates and events in Plaspy for operational monitoring

## Common Configuration Workflow

1. Access the official Supermate configuration method such as the vendor software, web tool, or SMS command set provided by the manufacturer.
2. In the device server settings enter either the server domain d.plaspy.com or the server IP 54.85.159.138.
3. Set the device port to 8888 to match Plaspy server requirements.
4. If the device requires transport selection choose UDP or TCP depending on your installation needs and device options.
5. Apply or save the configuration in the manufacturer tool and confirm the settings were written to the device.
6. Restart or power cycle the D12-G if the manufacturer tool instructs you to do so for changes to take effect.
7. Validate that the device reports to Plaspy and that location and event messages appear in the platform.

## Example Configuration Commands

The exact commands and syntax vary by firmware and manufacturer tool. Supermate devices are commonly configured through the official configuration software or SMS command set, so follow the method provided by the manufacturer to point the device to d.plaspy.com or 54.85.159.138 on port 8888. Because methods differ by region and firmware, consult the Supermate documentation for the exact command format used by your device.

## Configuration Notes

- Firmware differences can change the required command syntax or menu locations in the manufacturer software; always check the firmware version before applying commands.
- If your setup tool offers both domain and IP entry, using d.plaspy.com allows DNS based routing while the IP provides a direct route; both are acceptable for Plaspy.
- Choose UDP if you prefer lower overhead reporting and your network reliability is high; choose TCP if you need connection oriented delivery and the device supports it.
- Confirm that the SIM or cellular service supports outbound data connections required for reporting to the Plaspy server.
- Manufacturer tools sometimes require a device restart to apply server changes; treat this as a normal part of the workflow.

## Why Use Plaspy with This Configuration

Integrating the Supermate D12-G with Plaspy gives organizations a simple way to centralize real time location, geo fence alerts, and SOS events from distributed assets into a single monitoring platform. Using the shared Plaspy server settings minimizes per device differences and lets you scale device deployments while maintaining consistent reporting behavior.

To learn more about Plaspy and supported integrations visit https://www.plaspy.com. For the most current device specific commands, firmware notes, and configuration references verify details on the Supermate manufacturer site http://www.gps-summit.com/ as manufacturer specifications and setup methods can change over time.
