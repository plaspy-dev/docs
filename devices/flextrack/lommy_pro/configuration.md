---
slug: /flextrack/lommy_pro/configuration
id: lommy_pro-configuration
sidebar_label: Configuration
title: Flextrack - Lommy Pro Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Flextrack Lommy Pro and Plaspy server settings for reliable fleet and asset tracking
keywords:
  - Flextrack Lommy Pro configuration
  - Lommy Pro setup
  - Lommy Pro Plaspy
  - GPS tracker configuration
  - vehicle tracking setup
  - fleet tracking configuration
  - Plaspy server settings
  - Lommy Pro server configuration
  - GPS platform setup
  - tracker protocol detection
---

# Flextrack - Lommy Pro Configuration

This page documents the public configuration context required to integrate the Flextrack Lommy Pro with Plaspy for real time tracking and telemetry. It focuses on the shared Plaspy server settings and the practical steps you will apply on the manufacturer side so the Lommy Pro reports position and telemetry to Plaspy dashboards and APIs.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Exact manufacturer configuration steps for Lommy Pro can vary by firmware, hardware revision, installation type, and the configuration tools provided by Flextrack or their resellers. Use this guide together with the official Flextrack documentation for device specific commands and firmware notes.

## Configuration Overview

This configuration process prepares a Lommy Pro unit to send GNSS fixes, telemetry and event data to the Plaspy ingestion endpoint so devices appear in your Plaspy workspace and produce live tracking, alerts and reports.

- Configure the Lommy Pro to report to Plaspy using the shared server endpoint and port.
- Select the transport method required by the device (UDP or TCP) and confirm it is saved to the device.
- Validate cellular connectivity and power so the device can establish sessions and transmit telemetry.
- Confirm the device appears in Plaspy and that location updates and key telemetry are visible in the platform.
- Test basic events such as movement reporting, ignition state, or temperature alerts relevant to your installation.

## Plaspy Server Settings

When configuring Lommy Pro for use with Plaspy, apply the following public server settings exactly as shown:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport: UDP or TCP (the device may be configured using either transport on port 8888)
- Plaspy automatically detects the tracker protocol when data arrives

Note: All devices in Plaspy use the same port, so use port 8888 for Lommy Pro when pointing the device at Plaspy.

## Typical Requirements Before Setup

- Confirm the Lommy Pro has a charged battery or a stable external supply and is powered on.
- Ensure a valid cellular SIM and active data plan compatible with the device are installed if using cellular telemetry.
- Have access to the official Flextrack configuration tool or the manufacturer provided method (software, web portal, SMS commands, or USB/serial interface).
- Know the device IMEI or unique identifier so you can locate the unit in Plaspy after it starts reporting.
- Confirm you have any required credentials or permissions for remote configuration and firmware management.
- If the installation is wired, verify proper ignition and power wiring before testing live reports.

## How This Tracker Connects to Plaspy

Lommy Pro sends GNSS fixes and telemetry to Plaspy using standard transport protocols and the shared Plaspy endpoint and port. Plaspy ingests and normalizes those messages so vehicles and assets are visible in real time and in historical reporting.

- The device is configured to report to the shared Plaspy server endpoint d.plaspy.com (or the server IP 54.85.159.138) on port 8888.
- Choose UDP or TCP on the Lommy Pro configuration if the device requires an explicit transport selection.
- Plaspy automatically detects which tracker protocol the device is using, so no protocol selection is required inside Plaspy.
- Once the device sends data, Plaspy will process position updates, telemetry and event messages for live mapping and alerts.
- Validation in Plaspy confirms operational health and telemetry arrival for monitoring and automated rules.

## Common Configuration Workflow

1. Access the official Flextrack configuration method or software recommended for Lommy Pro (manufacturer web tool, desktop utility, SMS commands, or serial interface).
2. In the server or APN settings area, enter the Plaspy server address using either d.plaspy.com or the IP 54.85.159.138.
3. Set the server port to 8888. Plaspy uses the same port for all supported devices.
4. If the Lommy Pro requires a transport selection, choose UDP or TCP and save that setting.
5. Apply or save the configuration on the device using the manufacturer tool or command set.
6. If required by the device or after changing core settings, restart the Lommy Pro to initiate the new configuration.
7. Validate that the Lommy Pro is reporting to Plaspy by checking the device list and live map for position and telemetry updates.

## Example Configuration Commands

The Lommy Pro can be configured through multiple manufacturer provided methods and the exact commands or GUI steps vary by firmware and tooling. Because Flextrack provides several configuration paths (desktop utilities, web tools, SMS and serial), this guide does not prescribe a single command set. Refer to Flextrack documentation or your installer tool for the exact syntax to point the device at:

- Server d.plaspy.com or 54.85.159.138
- Port 8888
- Transport UDP or TCP

If you use SMS based configuration or a command line interface provided by Flextrack, follow the manufacturer examples for writing server, port and transport entries. Keep placeholders such as APN values or credentials as provided by your SIM operator and Flextrack tools.

## Configuration Notes

- Firmware differences can change available configuration options and the location of server settings; always check the Lommy Pro firmware release notes.
- Choose UDP or TCP according to your installation needs; both are supported by Lommy Pro and Plaspy will accept data on port 8888 regardless of transport.
- Because Plaspy automatically detects the tracker protocol, you do not need to change protocol settings in the platform when the device starts sending data.
- Installer practices vary for wired vehicle installations versus battery backed deployments; verify sleep and reporting intervals in manufacturer tools for battery optimization.
- Keep a record of device identifiers such as IMEI when registering and validating units in Plaspy.

## Why Use Plaspy with This Configuration

Using Flextrack Lommy Pro with Plaspy provides dependable real time location and telemetry for fleet managers and asset owners. By pointing Lommy Pro to the shared Plaspy server endpoint and using port 8888, teams get continuous visibility, event reporting and integration-ready telemetry without complex per-device server configurations.

To learn more about how Plaspy can ingest and present Lommy Pro data, visit https://www.plaspy.com. For device specific configuration commands, firmware updates, and the latest installation guidance for Lommy Pro, verify details with the manufacturer at https://flextrack.dk. Manufacturer specifications and setup methods can change over time, so confirm current instructions on the official Flextrack site.
