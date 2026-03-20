---
slug: /supermate/d10_w/configuration
id: d10_w-configuration
sidebar_label: Configuration
title: Supermate - D10-W Configuration
sidebar_class_name: menu_item_tracker
description: Public guide to configure the Supermate D10 W for use with Plaspy including server settings transport selection and validation steps
keywords:
  - Supermate D10 W configuration
  - Supermate D10 W setup
  - Supermate D10 W Plaspy
  - D10 W server configuration
  - D10 W GPS tracker configuration
  - Supermate tracker setup guide
  - Plaspy tracker configuration
  - vehicle tracking Supermate D10 W
  - asset tracking D10 W
  - GPS tracker D10 W setup
---

# Supermate - D10-W Configuration

This page describes the public configuration context for using the Supermate D10 W tracker with Plaspy. It collects the practical server settings and setup guidance you will need to point a compatible D10 W device at the Plaspy platform so the device can report location and basic event data to your account.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when a device connects. Exact manufacturer side setup steps can vary by device firmware, hardware revision, installer tools, and vendor configuration utilities, so treat the settings below as the Plaspy-side requirements and verify manufacturer procedures before applying changes.

## Configuration Overview

Setting up the Supermate D10 W for Plaspy means configuring the tracker so it sends its data to Plaspy's shared endpoint and port, then validating that the device appears in your Plaspy account. The focus is on delivering reliable connectivity and ensuring the tracker reports to the Plaspy server so you can monitor location and events.

- Configure the tracker to use the Plaspy server endpoint for data reporting.
- Ensure the tracker transport and port settings match Plaspy requirements.
- Validate network access and that the tracker is powered and reachable.
- Confirm the device appears and reports in Plaspy after configuration.
- Save and, if needed, restart the tracker so new settings take effect.

## Plaspy Server Settings

Use the following Plaspy server settings when configuring the Supermate D10 W. These are the public settings Plaspy uses for device connections.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when the device connects
- All devices in Plaspy use the same port to simplify configuration

## Typical Requirements Before Setup

- A powered and accessible Supermate D10 W unit with configuration access.
- An active SIM card and cellular connectivity when using GSM network reporting as supported by the device.
- Access to the official Supermate configuration method or software from the device vendor.
- The Plaspy account and credentials required to view and validate the device on the platform.
- A stable power source or charged battery to avoid interruption during configuration.
- Basic familiarity with selecting TCP or UDP transport if the device configuration requires it.

## How This Tracker Connects to Plaspy

When configured for Plaspy, the Supermate D10 W is set to send periodic position and event messages to the shared Plaspy server endpoint and port. Plaspy receives the incoming messages, automatically detects the device protocol, and processes the data so the tracker becomes visible in your Plaspy account.

- The device sends data to d.plaspy.com or directly to 54.85.159.138.
- All reports are directed to port 8888 on the Plaspy server.
- Choose UDP or TCP transport on the device if a transport selection is required.
- Plaspy auto detects the protocol and interprets the incoming messages.
- After reporting starts, the tracker is made visible and monitored in Plaspy.

## Common Configuration Workflow

1. Access the official Supermate configuration method or software provided by the manufacturer or vendor.
2. In the device server settings enter d.plaspy.com or alternatively the server IP 54.85.159.138.
3. Set the device port to 8888 to match Plaspy device port requirements.
4. Choose the transport protocol UDP or TCP on the device if the configuration requires a transport selection.
5. Apply or save the configuration changes in the manufacturer tool or device menu.
6. Restart the device if required by the device or firmware to apply new network settings.
7. Validate that the device begins reporting to Plaspy and appears in your Plaspy device list.

## Example Configuration Commands

The Supermate D10 W configuration method and commands vary by firmware and the manufacturer configuration tool. Because the device can be configured through different manufacturer utilities and SMS or software interfaces, the exact commands or steps depend on the tool you are using. Refer to the official Supermate configuration guide or vendor tool for the exact command syntax used to set server, port, and transport values.

If you have a manufacturer provided command set or SMS templates, apply the same values shown in Plaspy Server Settings: use d.plaspy.com or 54.85.159.138 for the server and set the port to 8888. Choose UDP or TCP when prompted by the device configuration interface.

## Configuration Notes

- Firmware differences can change the exact menu names, command syntax, or required order for settings; always check the device firmware version.
- If the manufacturer supports both SMS and software based configuration, prefer software or direct configuration when available to reduce manual errors.
- TCP vs UDP selection can affect delivery and retransmission behavior; choose the transport that matches your operational requirements and the manufacturer's recommendations.
- Plaspy uses the same port for all supported devices and automatically detects the tracker protocol, simplifying mass deployment.
- When in doubt, consult the official Supermate documentation for the D10 W for the most precise command examples and configuration flow.

## Why Use Plaspy with This Configuration

Configuring the Supermate D10 W to report to Plaspy gives you a straightforward path to centralized tracking, event monitoring, and operational visibility. Using Plaspy's shared server endpoint and automatic protocol detection reduces per-device configuration complexity and helps teams bring devices online quickly for fleet or asset tracking.

Learn more about Plaspy and how it can manage devices like the Supermate D10 W at https://www.plaspy.com. For the latest device specific setup details, firmware notes, and manufacturer guidance verify the information on the official Supermate pages at http://www.gps-summit.com/ as manufacturer documentation may change over time.
