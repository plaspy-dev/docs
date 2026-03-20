---
slug: /hunterpro/cp60g/configuration
id: cp60g-configuration
sidebar_label: Configuration
title: HunterPro - CP60G Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for connecting the HunterPro CP60G tracker to Plaspy with practical server settings and setup workflow
keywords:
  - HunterPro CP60G configuration
  - HunterPro CP60G setup Plaspy
  - CP60G server configuration
  - CP60G GPS tracker setup
  - HunterPro tracking software configuration
  - CP60G vehicle tracking setup
  - Plaspy tracker configuration
  - GPS tracker platform setup
  - Fleet tracking CP60G configuration
  - CP60G GPRS configuration
---

# HunterPro - CP60G Configuration

This page provides public configuration context for using the HunterPro CP60G GPS tracker with the Plaspy platform. It summarizes the practical server settings and the common steps you will take to point a CP60G device to Plaspy so location and device data become visible in the platform. Use this guide together with the manufacturer documentation for device specific procedures.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when a device connects. Exact manufacturer side steps can vary by firmware version, hardware revision, installation type, and vendor tools, so confirm any device specific commands or utilities with HunterPro documentation before proceeding.

## Configuration Overview

Preparing a HunterPro CP60G for use with Plaspy centers on configuring its GPRS reporting settings so the device can reach Plaspy server endpoints and report position and event data. The goal is to have the device registered to Plaspy, reliably transmit location updates, and appear as an active device in the platform.

- Configure the device server to d.plaspy.com or the equivalent IP and the shared Plaspy port so the CP60G sends its data to Plaspy.
- Ensure GPRS connectivity and correct APN settings so the tracker can open a data session to Plaspy.
- Choose the transport mode supported by the device, UDP or TCP, and set the Plaspy port accordingly.
- Apply and save the configuration, restart the tracker if required, and verify the device shows as reporting in Plaspy.

## Plaspy Server Settings

Use the following public server settings when configuring the CP60G for Plaspy. Plaspy uses the same port for all supported devices and it automatically detects the tracker protocol when a device connects.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP depending on device requirement
- Automatic protocol detection in Plaspy when the device connects to the server

## Typical Requirements Before Setup

- A CP60G unit with power and antennas connected and the device powered on.
- An active SIM card with a data plan and correct APN details provided by your mobile operator.
- Access to the HunterPro configuration method or software used to set server and GPRS parameters.
- Knowledge of the device firmware version and any vendor specific configuration commands.
- A maintenance window or safe testing environment for applying settings and restarting the device.
- Access to the Plaspy support or account team if you need assistance validating the device after setup.

## How This Tracker Connects to Plaspy

The CP60G uses its GSM GPRS connection to open a data session and send location and event packets to Plaspy. The device is configured to report to the shared Plaspy server endpoint and port so Plaspy can ingest and display the tracker data.

- The tracker is configured to send its telemetry to d.plaspy.com or 54.85.159.138 on port 8888.
- Choose UDP or TCP as the transport based on the device configuration option; Plaspy will accept either.
- Plaspy automatically detects the tracker protocol when traffic arrives so no separate protocol selection is required in the platform.
- After the device starts reporting, Plaspy provides visibility into location, connectivity status, and basic event reporting.

## Common Configuration Workflow

1. Access the official HunterPro configuration method or software for the CP60G as provided by the manufacturer.
2. Configure GPRS parameters including APN as required by the SIM card and mobile operator.
3. Enter the Plaspy server as d.plaspy.com or alternatively use the IP 54.85.159.138 in the device server field.
4. Set the device port to 8888 as Plaspy uses this same port for all devices.
5. Choose UDP or TCP for transport if the device requires you to select one.
6. Apply or save the configuration and restart the CP60G if the device requires a reboot to apply network changes.
7. Validate that the device reports to Plaspy by checking device activity on the platform and confirming incoming connections.

## Example Configuration Commands

The exact commands or SMS strings used to configure a CP60G vary with the manufacturer tool, firmware build, and regional firmware variants. HunterPro devices are commonly configured via a vendor supplied software tool or SMS command set. When applying Plaspy settings you will typically set the server to d.plaspy.com or 54.85.159.138 and the port to 8888 and select UDP or TCP if required by the device. Confirm the precise command syntax with HunterPro documentation or the configuration utility that accompanies the CP60G.

## Configuration Notes

- Firmware differences may change command syntax or the available configuration fields. Check your device firmware version before applying commands.
- TCP and UDP both work with Plaspy but behavior can differ under poor network conditions. Choose the transport that matches your reliability and latency needs.
- Always confirm APN settings with the mobile operator before troubleshooting connection failures.
- Manufacturer tools may require a USB or serial connection for advanced configuration while some versions support SMS based setup for basic server and APN changes.
- Keep a record of original device settings before making changes so you can restore factory values if needed.

## Why Use Plaspy with This Configuration

Configuring the HunterPro CP60G to report to Plaspy gives organizations a straightforward path to centralized visibility and operational monitoring. Plaspy accepts device connections on a shared endpoint so organizations can consolidate tracking data from many CP60G units into one platform for fleet oversight, recovery workflows, and event monitoring.

To learn more about the Plaspy platform visit https://www.plaspy.com. For the latest device specific setup details, firmware notes, and manufacturer instructions verify information at the HunterPro website http://hunterpro.com.tw/ since manufacturer specifications and configuration methods can change over time.
