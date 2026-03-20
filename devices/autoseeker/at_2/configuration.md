---
slug: /autoseeker/at_2/configuration
id: at_2-configuration
sidebar_label: Configuration
title: Autoseeker - AT-2 Configuration
sidebar_class_name: menu_item_tracker
description: Public setup guide for Autoseeker AT-2 configuration with Plaspy including server settings transport options and practical workflow
keywords:
  - Autoseeker AT-2 configuration
  - Autoseeker AT-2 setup
  - AT-2 Plaspy configuration
  - AT-2 GPS tracker setup
  - Autoseeker GPS configuration
  - AT-2 tracking server setup
  - Plaspy device configuration
  - Portable asset tracker setup
  - Personal safety GPS setup
  - AT-2 platform integration
---

# Autoseeker - AT-2 Configuration

This page covers the public configuration context for using the Autoseeker AT-2 with Plaspy. It summarizes the Plaspy server settings and practical steps you can follow to point an AT-2 tracker at Plaspy for location, telemetry, and alarm reporting. The content is based on the AT-2 product description and focuses on the publicly available integration details needed to connect the device to Plaspy.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when the device reports to the platform. Manufacturer-side setup steps can vary by firmware revision, hardware revision, installation type, and vendor configuration tools, so follow this guidance alongside the official Autoseeker materials for the most current device-specific instructions.

## Configuration Overview

This configuration process prepares an AT-2 unit to communicate with Plaspy, validates connectivity, and enables the device to appear as an active data source in the Plaspy platform. The main objective is to configure the tracker to report to Plaspy's shared server endpoint and verify that position, alarm, and status messages reach the platform.

- Configure the tracker to use Plaspy's server endpoint and port so data uploads are routed to the platform.
- Choose the transport mode (UDP or TCP) if the tracker requires a selection, matching the device settings to Plaspy's supported transports.
- Save and apply configuration on the AT-2, then restart if the device or tool requires it.
- Validate connectivity by confirming the AT-2 reports location, telemetry, and alarm events into Plaspy.
- Use official Autoseeker configuration tools or firmware interfaces to make changes and keep a record of settings for troubleshooting.

## Plaspy Server Settings

- Server domain: d.plaspy.com  
- Server IP: 54.85.159.138  
- Port: 8888  
- Transport: support for UDP or TCP on port 8888 depending on device selection  
- Plaspy behavior: the platform automatically detects the tracker protocol when the device connects and Plaspy uses the same port for all supported devices

These values are the public Plaspy endpoint parameters for connecting devices such as the AT-2 to the platform.

## Typical Requirements Before Setup

- Ensure the AT-2 has a charged battery and is powered on for configuration and testing.
- Confirm the device has an active cellular connection and a valid Micro SIM as required by the AT-2 hardware.
- Obtain access to the official Autoseeker configuration method or software supplied by the vendor or reseller.
- Have Plaspy account access and a place in your Plaspy workspace to verify that the device is reporting.
- Be prepared to restart the device after applying settings if the firmware requires a reboot to activate new server parameters.

## How This Tracker Connects to Plaspy

When configured to report to Plaspy, the AT-2 uploads location fixes, status updates, and alarm events over the cellular network to the shared Plaspy server endpoint and port. Plaspy receives the device messages and maps them into the platform where users can view live location, alarms, and device telemetry.

- The AT-2 is configured to send position and telemetry data to d.plaspy.com (or 54.85.159.138) on port 8888.
- Transport can be set to UDP or TCP on the device; Plaspy accepts both and detects the protocol automatically.
- Alarms such as SOS, tamper, displacement, and low battery are forwarded to Plaspy for alerting and reporting.
- Plaspy consolidates incoming device messages so the tracker becomes visible in monitoring dashboards and reporting tools.

## Common Configuration Workflow

1. Access the official Autoseeker configuration method or software for the AT-2 (use the vendor tool, web UI, or documented configuration interface).
2. In the device server settings, enter the Plaspy server address using either d.plaspy.com or 54.85.159.138.
3. Set the server port to 8888 (Plaspy uses the same port for all supported devices).
4. Choose the transport protocol (UDP or TCP) if the AT-2 requires explicit selection.
5. Save or apply the configuration in the manufacturer tool so the settings are written to the device.
6. Restart the AT-2 if the device or firmware requires a reboot to activate the new server settings.
7. Validate connectivity by confirming the device reports position and events into Plaspy and appears in your Plaspy workspace.

## Example Configuration Commands

The AT-2 manufacturer may provide specific configuration commands or an app/web tool for updating server and transport settings. Exact commands, if available, vary by firmware and vendor tools. Because model-specific command syntax and methods are controlled by Autoseeker, consult the official Autoseeker configuration guide or vendor-supplied tool for the precise command format required to point the device to d.plaspy.com or 54.85.159.138 on port 8888.

If you have manufacturer-provided command examples or SMS/CLI syntax from Autoseeker, apply them in the order recommended by the vendor and preserve any placeholders provided by the tool. Always verify command effects by checking device connectivity in Plaspy after applying changes.

## Configuration Notes

- Firmware and hardware revisions can change command syntax and menu locations; always confirm the instructions match your device firmware version.
- Selecting TCP versus UDP may affect message delivery behavior and retransmission characteristics; choose the transport recommended for your deployment or as supported by Autoseeker.
- Plaspy uses the same port 8888 for all devices and automatically detects the device protocol, so focus on correct server host and transport selection on the tracker.
- Keep a copy of any configuration profiles or commands you apply so you can reproduce or troubleshoot the setup later.
- Refer to the manufacturer's documentation for any device-specific behaviors such as power-save reporting intervals and alarm message formats.

## Why Use Plaspy with This Configuration

Integrating the Autoseeker AT-2 with Plaspy provides a straightforward way to bring compact, long-life personal and portable asset tracking into a centralized monitoring platform. Organizations that need visibility, alarm consolidation, and simple reporting for safety and anti-theft use cases will find the AT-2's telemetry and alarm suite useful when streamed into Plaspy for live tracking and alert workflows.

To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. For the latest Autoseeker device-specific setup details, firmware notes, and configuration tools verify the manufacturer's documentation at https://autoseekergps.com/ because setup methods and firmware behavior may change over time.
