---
slug: /thinkrace/at15/configuration
id: at15-configuration
sidebar_label: Configuration
title: ThinkRace - AT15 Configuration
sidebar_class_name: menu_item_tracker
description: Public guide for configuring the ThinkRace AT15 luggage tracker to report to Plaspy with shared server settings
keywords:
  - ThinkRace AT15 configuration
  - ThinkRace AT15 setup
  - AT15 server configuration
  - AT15 Plaspy setup
  - ThinkRace tracker configuration
  - Plaspy device configuration
  - luggage tracker setup
  - GPS tracker configuration
  - tracking platform integration
  - location reporting setup
---

# ThinkRace - AT15 Configuration

This page describes the public configuration context for using the ThinkRace AT15 tracker with Plaspy. It focuses on the practical server and workflow information needed to point an AT15 to Plaspy so the device can report location and appear in the platform. The details here use public Plaspy settings and general setup guidance rather than proprietary manufacturer secrets.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Exact manufacturer side setup steps can vary depending on device firmware, hardware revision, installation type, and vendor configuration tools. Use the guidance below to prepare the AT15 for Plaspy and refer to ThinkRace for device specific instructions when required.

## Configuration Overview

This configuration prepares an AT15 tracker so it can send location data to Plaspy and become visible in your Plaspy account. The focus is on entering the correct server endpoint and transport settings and validating that the tracker successfully reports to the platform.

- Configure the tracker to report to the Plaspy server endpoint using the shared server settings.
- Select the transport method the device requires and confirm the port is set to 8888.
- Save or apply the settings and restart the tracker if the device requires a reboot.
- Verify the tracker appears and transmits data in Plaspy after configuration.
- Keep manufacturer documentation and firmware notes available in case optional parameters are needed.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

These server values are the public settings Plaspy uses for all supported devices and should be entered on the device or in the manufacturer configuration tool where the server host and port are requested.

## Typical Requirements Before Setup

- A charged and operational AT15 tracker that is ready for configuration.
- Access to the official ThinkRace configuration method or vendor tool for the AT15.
- A device such as a smartphone or laptop to run the configuration tool or app.
- Account credentials for the tracker if the manufacturer tool requires authentication.
- Network connectivity for your configuration device so you can reach any online documentation or tools.
- The Plaspy server settings listed above available for quick reference.

## How This Tracker Connects to Plaspy

When configured for Plaspy, the AT15 is set to report its position and status to the Plaspy server endpoint and port. Plaspy receives the incoming device data and makes it available in the platform, with automatic protocol detection to accommodate TCP or UDP reporting.

- The tracker is configured to send data to d.plaspy.com or 54.85.159.138 on port 8888.
- The device uses either UDP or TCP transport depending on what the AT15 firmware accepts.
- Plaspy automatically detects the tracker protocol so the server accepts incoming reports without per device manual protocol selection on the Plaspy side.
- After reporting begins, Plaspy processes the incoming messages and shows device visibility and location in the platform.
- Validation of successful reporting confirms the tracker is correctly pointed at the shared Plaspy endpoint.

## Common Configuration Workflow

1. Access the official ThinkRace configuration method or software for the AT15 (mobile app, vendor tool, or web setup).
2. Locate the server or reporting settings section where host and port are entered.
3. Enter the server host as d.plaspy.com or the server IP 54.85.159.138.
4. Set the port value to 8888.
5. Choose UDP or TCP if the device requires you to select a transport protocol.
6. Apply or save the configuration on the tracker using the manufacturer tool.
7. Restart the device if the AT15 requires a reboot for settings to take effect.
8. Validate that the device reports to Plaspy and appears in the platform dashboard.

## Example Configuration Commands

The exact commands and the method to apply them vary by ThinkRace firmware and the configuration interface used. Some manufacturers provide SMS, web, or mobile app commands while others use a desktop tool. For the AT15, consult ThinkRace documentation or the configuration tool you are using to apply the Plaspy server settings d.plaspy.com or 54.85.159.138 and port 8888.

If you are using a vendor tool that accepts textual commands, the tool will generally require the server host and port fields to be filled with the values above. Preserve any placeholders the tool uses for APN or credentials as directed by ThinkRace.

## Configuration Notes

- ThinkRace firmware and configuration interfaces can differ by region and production date; verify the method applicable to your AT15 unit.
- If the AT15 requires selecting TCP or UDP, choose the option supported by your device. Plaspy will automatically detect the protocol on its side.
- Always save or apply changes in the manufacturer tool and restart the tracker when prompted to ensure settings are active.
- Keep a copy of the original device configuration in case you need to revert changes.
- When in doubt, consult the official ThinkRace documentation for AT15 specific command formats and configuration guidance.

## Why Use Plaspy with This Configuration

Using the AT15 with Plaspy allows organizations and individual users to consolidate tracking visibility on a single platform while relying on shared server settings that simplify device onboarding. Pointing the AT15 at Plaspy's server endpoint reduces per device variation and leverages Plaspy's automatic protocol detection to accept reports from the tracker.

To learn more about Plaspy and how it manages connected devices visit https://www.plaspy.com. For the latest AT15 device specific setup details, firmware notes, and manufacturer instructions verify current information at https://www.thinkrace.com/ since manufacturer configuration methods and firmware behavior can change over time.
