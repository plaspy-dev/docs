---
slug: /ulbotech/t376/configuration
id: t376-configuration
sidebar_label: Configuration
title: Ulbotech - T376 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Ulbotech T376 with Plaspy server settings and practical setup workflow for fleet integration
keywords:
  - Ulbotech T376 configuration
  - Ulbotech T376 setup
  - T376 Plaspy configuration
  - T376 GPS tracker setup
  - Ulbotech OBDII tracker
  - T376 server configuration
  - T376 fleet tracking
  - Plaspy compatible tracker
  - Ulbotech T376 installation
  - T376 OBDII configuration
---

# Ulbotech - T376 Configuration

This page documents the public configuration context for using the Ulbotech T376 with the Plaspy platform. It summarizes the shared server settings you will point the device to, outlines the typical preparation and validation steps, and explains how the T376 transmits OBDII and GNSS telemetry to Plaspy for live mapping and reporting. This guidance is focused on publicly available integration points and practical steps for device visibility in Plaspy.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but exact manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools. Use this document alongside the device manual and Ulbotech configuration utilities when applying settings on the unit or during fleet deployment.

## Configuration Overview

The goal of this configuration process is to prepare the T376 so it reliably reports position, OBDII telemetry, and events to Plaspy. Configuration ensures the device knows where to send its data, that network connectivity and APN settings are correct, and that Plaspy will ingest the stream for live tracking and historical playback.

- Point the tracker to the Plaspy server domain or IP and set the shared Plaspy port so telemetry reaches the platform.
- Confirm transport selection if required by the device interface by choosing UDP or TCP on the Plaspy port.
- Validate cellular and Wi Fi connectivity, including correct APN and an active data service on the SIM.
- Apply and save settings in the Ulbotech configuration tool or SMS setup method, then restart the device if required.
- Verify the T376 reports GNSS positions and OBDII parameters to Plaspy and confirm visibility in the platform.

## Plaspy Server Settings

Use these public Plaspy server settings when configuring the T376 for Plaspy compatibility:

- Server domain name d.plaspy.com for device reporting
- Server IP address 54.85.159.138 as an alternative endpoint
- Port 8888 which is the shared port used by all devices in Plaspy
- Transport support for UDP or TCP depending on the device configuration option
- Plaspy automatically detects the tracker protocol when the device reports to the configured endpoint

## Typical Requirements Before Setup

- A powered T376 installed or connected via the OBDII port with stable vehicle power
- An active micro USIM with a data plan and correct APN settings for cellular reporting
- Access to the Ulbotech official configuration method such as the vendor web tool, desktop utility, or documented SMS commands
- Knowledge of whether you will use cellular or Wi Fi for data so you can configure the appropriate channel and APN
- The device firmware revision and any vendor provided configuration notes for that firmware
- Access to Plaspy platform account or support channel for validation of device visibility after configuration

## How This Tracker Connects to Plaspy

The Ulbotech T376 sends GNSS positions, OBDII vehicle parameters, and sensor events to the Plaspy endpoint you configure. Plaspy ingests the incoming data stream for real time mapping, alerts, and reporting. The device can use cellular or Wi Fi as available and will report to the shared Plaspy endpoint and port.

- The tracker reports location and OBDII telemetry to d.plaspy.com or 54.85.159.138 on port 8888
- Transport may be UDP or TCP depending on what is configured on the device and network considerations
- Plaspy automatically detects the tracker protocol so standard reporting packets will be recognized
- Data sent to the Plaspy endpoint enables live tracking, historical playback, and event reporting in the platform
- After configuration, verify that heartbeat, position, and OBDII messages arrive at Plaspy for full visibility

## Common Configuration Workflow

1. Access the official Ulbotech configuration method or software provided for the T376, or use the documented SMS setup flow if supported.
2. In the device network settings, enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 as the reporting endpoint.
3. Set the device reporting port to 8888 which is the shared Plaspy port for all supported trackers.
4. If the device requires transport selection, choose UDP or TCP according to your network and preference.
5. Enter or confirm APN and SIM related settings so the unit has an active data connection on cellular, or configure Wi Fi as required.
6. Apply or save the configuration and restart the device if the Ulbotech procedure requires a reboot to activate settings.
7. Validate that the T376 reports to Plaspy by checking for incoming telemetry and position updates in Plaspy.

## Example Configuration Commands

The exact configuration commands and method for the Ulbotech T376 depend on the manufacturer tools or firmware revision. Ulbotech may provide a web utility, desktop configuration tool, or SMS command set for initial setup. Because commands differ by firmware and regional builds, consult the official Ulbotech documentation or the configuration interface supplied with your device for precise command syntax and examples.

## Configuration Notes

- Firmware differences can change available configuration options and the exact command syntax, so confirm the T376 firmware revision before applying procedural steps.
- Choose TCP when you need connection oriented delivery and UDP when you prefer lower latency and lighter overhead, but test both where possible since network behavior can differ.
- APN settings are required for cellular reporting; keep APN credentials and SIM status handy during setup.
- If you use Wi Fi as the reporting channel, ensure the device can reach d.plaspy.com or 54.85.159.138 on port 8888 from that network.
- Keep a note of the device IMEI and any identification string so you can match incoming connections to the correct asset in Plaspy.

## Why Use Plaspy with This Configuration

Pairing the Ulbotech T376 with Plaspy gives fleets immediate access to real time location, OBDII diagnostics, and event monitoring using a single, shared Plaspy endpoint. The T376’s plug and play OBDII form factor, combined with robust GNSS and dual channel communications, helps organizations capture vehicle telemetry for safety, maintenance, and operational efficiency.

To learn more about Plaspy and how it ingests device data for mapping, alerts, and fleet analytics visit https://www.plaspy.com. For the latest device specific commands, firmware behavior, and manufacturer setup details verify information on the Ulbotech website http://www.ulbotech.com/ so your deployment uses the most current official guidance.
