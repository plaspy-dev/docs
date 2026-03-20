---
slug: /gosafe/gat1000/configuration
id: gat1000-configuration
sidebar_label: Configuration
title: Gosafe - GAT1000 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for the Gosafe GAT1000 showing how to point the device to Plaspy shared server settings
keywords:
  - Gosafe GAT1000 configuration
  - Gosafe GAT1000 setup
  - GAT1000 Plaspy configuration
  - GAT1000 server settings
  - Gosafe GPS tracker configuration
  - GAT1000 tracking setup
  - Plaspy tracker configuration
  - Gosafe tracker Plaspy setup
  - fleet management tracker setup
  - asset tracker configuration
---

# Gosafe - GAT1000 Configuration

This page provides public configuration context for using the Gosafe GAT1000 asset tracker with the Plaspy platform. It summarizes the shared server settings Plaspy expects and outlines the practical steps typically required to point the tracker at Plaspy so the device can report location and telemetry to the platform.

Plaspy uses a common server endpoint and port for supported devices and automatically detects the tracker protocol. Manufacturer-side setup steps for the GAT1000 can vary with firmware, hardware revision, installer tools, and the chosen configuration method, so this guide focuses on the public Plaspy settings and a practical workflow rather than proprietary manufacturer procedures.

## Configuration Overview

The goal of configuration is to prepare the GAT1000 to communicate reliably with Plaspy, validate connectivity, and make the device visible in your Plaspy account. Use the manufacturer tools to point the tracker to the shared Plaspy endpoint and confirm that fixes and events arrive at the platform.

- Configure the device network target to Plaspy's shared server endpoint so data is routed to Plaspy.
- Select the transport protocol (UDP or TCP) on the tracker if required and ensure the device uses the Plaspy port.
- Save and apply the configuration using the official Gosafe configuration method or software.
- Validate connectivity and reporting by confirming GNSS fixes and telemetry arrive in Plaspy.
- Repeat verification for any I/O or sensor mappings you plan to use with Plaspy dashboards and rules.

## Plaspy Server Settings

Use the following public Plaspy connection settings when configuring the GAT1000. Plaspy uses the same port for all supported devices and the platform automatically detects the tracker protocol.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support: UDP or TCP (the device may be configured using either UDP or TCP on port 8888)
- Plaspy automatically detects the tracker protocol when the device connects

## Typical Requirements Before Setup

- A powered or battery charged GAT1000 unit that is accessible for configuration and testing.
- Active cellular connectivity for the device (LTE Cat 1 support is built into the GAT1000) and any required SIM provisioning or eSIM activation.
- Access to the official Gosafe configuration method or software for the GAT1000 to change server, port, and transport settings.
- Knowledge of the device identifier or serial provided by Gosafe so the device can be located in Plaspy after it reports.
- A Plaspy account or platform access where the device will be registered and monitored.
- Basic GNSS visibility during validation to confirm the device is sending location fixes to Plaspy.

## How This Tracker Connects to Plaspy

When configured for Plaspy, the GAT1000 will send GNSS fixes, I/O events, and telemetry to the shared Plaspy server endpoint and port. Plaspy ingests these messages, maps fields into the platform, and presents real-time location and historical data for monitoring and reporting.

- The tracker posts location and telemetry to d.plaspy.com (or 54.85.159.138) on port 8888.
- Transport can be UDP or TCP depending on the GAT1000 configuration; Plaspy will accept either and auto-detect the protocol.
- The device sends GNSS fixes and configured I/O events so Plaspy can display position, ignition state, and sensor telemetry.
- Plaspy receives and decodes device messages and makes them visible in dashboards, alerts, and reports.
- Validating that the device reports successfully confirms the tracker is communicating with the shared Plaspy endpoint.

## Common Configuration Workflow

1. Access the official Gosafe GAT1000 configuration method or software provided by the manufacturer.
2. Enter the Plaspy server address using either d.plaspy.com or 54.85.159.138 as the destination.
3. Set the device port to 8888 (Plaspy uses the same port for all devices).
4. Choose UDP or TCP as the transport if the GAT1000 requires a transport selection.
5. Apply or save the configuration changes in the device configuration tool.
6. Restart the GAT1000 if the manufacturer instructions require a reboot for settings to take effect.
7. Validate that the device reports to Plaspy by confirming GNSS fixes and telemetry appear in your Plaspy platform view.

## Example Configuration Commands

The exact commands and configuration format vary by Gosafe firmware and the configuration tool you use (serial console, web utility, or manufacturer software). Because manufacturer configuration syntax differs between firmware releases and tools, follow Gosafe documentation for precise command syntax and use the Plaspy server settings above when entering destination values.

If you use an SMS or serial command method supplied by Gosafe, replace any placeholder values with your actual settings and ensure the destination is set to d.plaspy.com or 54.85.159.138 and port 8888. Consult Gosafe configuration guides for supported command strings and formatting.

## Configuration Notes

- Different firmware versions and hardware revisions can change command syntax and available options; always check the Gosafe documentation for the GAT1000 firmware you are using.
- Choose UDP or TCP based on installer preference and network reliability; Plaspy accepts both and will auto-detect the protocol on connection.
- Ensure SIM provisioning and cellular coverage are adequate for LTE Cat 1 operation in your deployment region.
- Keep a record of any changes you make in device settings so you can reproduce or troubleshoot setup across multiple units.
- Manufacturer configuration tools or SMS command sets are the authoritative source for device-specific commands and reset procedures.

## Why Use Plaspy with This Configuration

Using the Gosafe GAT1000 with Plaspy gives organizations real-time visibility and asset-level telemetry for heavy equipment, trailers, and high-value outdoor assets. The combination of a rugged device built for harsh environments and Plaspy's centralized ingestion and reporting creates a scalable solution for tracking, alerting, and operational oversight.

To learn more about Plaspy and how it supports mixed fleets and telemetry workflows, visit https://www.plaspy.com. For the latest GAT1000 device-specific configuration methods, firmware behavior, and manufacturer details, verify current information on the official Gosafe website https://gosafesystem.com/.
