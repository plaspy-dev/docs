---
slug: /stars_nav/pt_35w/configuration
id: pt_35w-configuration
sidebar_label: Configuration
title: Stars Nav - PT-35W Configuration
sidebar_class_name: menu_item_tracker
description: Configure Stars Nav PT-35W for Plaspy using shared server settings and automatic protocol detection
keywords:
  - Stars Nav PT-35W configuration
  - PT-35W setup
  - Stars Nav tracker configuration
  - PT-35W Plaspy setup
  - GPS tracker configuration
  - Plaspy server settings
  - vehicle tracking setup
  - asset tracking PT-35W
  - waterproof GPS tracker
  - fleet management configuration
---

# Stars Nav - PT-35W Configuration

This page covers the public configuration context for using the Stars Nav PT-35W tracker with Plaspy. It explains the shared Plaspy server settings you will apply to the device, describes the typical requirements before integration, and outlines a practical workflow for preparing the device to report to Plaspy for real time tracking and alerts. The guidance here is intended to help technical installers and fleet administrators map the PT-35W configuration steps to Plaspy ingestion.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when the device connects. Exact manufacturer side setup steps can vary depending on firmware version, hardware revision, installation type, and vendor tools. Always review Stars Nav documentation and any device specific manuals or configuration utilities before changing device parameters.

## Configuration Overview

Configuring the PT-35W for use with Plaspy is primarily about directing the device to the Plaspy server endpoint and ensuring the tracker can reliably connect over the cellular network. The process typically includes setting the server address, selecting transport if required, setting the port, and validating that the unit reports location and status to the Plaspy platform.

- Point the PT-35W at the Plaspy server endpoint so location reports reach the platform.
- Select the transport protocol supported by the device firmware and network environment.
- Ensure APN and cellular parameters are correct so the tracker has internet connectivity.
- Apply and save settings then perform a connectivity test to confirm reports arrive in Plaspy.
- Monitor the tracker online/offline state and event inputs such as panic or engine status after configuration.

## Plaspy Server Settings

Use the following public Plaspy server settings when configuring the PT-35W. Plaspy uses the same port for all supported devices and will automatically detect the tracker protocol when the device connects.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol on connection

## Typical Requirements Before Setup

- Confirm the PT-35W is powered and reachable with a charged internal battery or connected external power.
- Ensure a compatible SIM card is installed and cellular service is active if using SMS or IP reporting.
- Obtain access to Stars Nav configuration tools or the device manual required to change server and transport settings.
- Have APN and carrier credentials ready if the device requires APN configuration for packet data.
- Access to a Plaspy account or tenant where the device will be registered and verified.
- Ability to restart or power cycle the device after applying settings if the device requires a reboot to apply changes.

## How This Tracker Connects to Plaspy

When configured for Plaspy, the PT-35W sends its GPS location and status messages to the shared Plaspy server endpoint and port. Plaspy then processes device messages, maps them to the appropriate protocol model, and exposes position and event data through the platform dashboards and alerting systems.

- The tracker is pointed to d.plaspy.com or the IP 54.85.159.138 for message delivery.
- Messages are sent over port 8888 using UDP or TCP depending on device transport selection.
- Plaspy identifies the tracker protocol automatically and parses location and alarm reports.
- Status events such as panic input or engine state are forwarded to Plaspy for alerting.
- The platform provides online/offline visibility so you can confirm successful reporting.

## Common Configuration Workflow

1. Access the official Stars Nav configuration method or software for the PT-35W, such as the vendor web tool, SMS command set, or USB/config utility documented by Stars Nav.
2. Enter the Plaspy server address by domain d.plaspy.com or by IP 54.85.159.138 in the device server field.
3. Set the device port to 8888 to match Plaspy ingestion for all supported devices.
4. Choose UDP or TCP transport if the device requires a transport selection, based on network and firmware recommendations.
5. Apply or save the configuration in the device tool or send the appropriate SMS command if the device uses SMS configuration.
6. Restart or power cycle the PT-35W if the device requires a reboot for new settings to take effect.
7. Validate that the device reports to Plaspy by checking the device status in your Plaspy tenant and confirming location updates and event reporting.

## Example Configuration Commands

The exact configuration commands and the method to send them vary by Stars Nav firmware and the vendor tool used. Some PT-35W variants support SMS based configuration, while others use a configuration utility or web interface. Because commands differ across firmware revisions, please use the Stars Nav manual or official config tool for exact syntax.

If your device supports SMS configuration, the general steps are to send the server address and port using the manufacturer documented command sequence, then save and reboot the device. Always confirm command syntax in the Stars Nav documentation before sending.

## Configuration Notes

- Firmware and hardware revisions may change available commands and menu locations. Verify the exact steps against the device manual for your unit.
- Choose UDP or TCP according to the device firmware recommendation and the stability of the cellular network in the installation area.
- If the PT-35W is configured via SMS, ensure the controlling number and SMS center settings match the device documentation.
- Confirm APN settings with your mobile carrier if packet data reporting is used; incorrect APN will prevent IP connections to d.plaspy.com or 54.85.159.138.
- After configuration, allow a few connection cycles for the device to appear in Plaspy and to receive automatic protocol detection.

## Why Use Plaspy with This Configuration

Using the PT-35W with Plaspy gives you a practical way to centralize location, status, and alarm reporting from weatherproof and low power trackers into a single platform. For fleets and asset operators who deploy trackers on motorcycles, boats, or caravans, this configuration lets you receive GPS positions, panic alerts, and engine state information in Plaspy for monitoring and response.

To learn more about Plaspy and how it can manage PT-35W devices at scale, visit https://www.plaspy.com. Device specific configuration methods and firmware behavior can change over time, so please verify the latest setup details and commands with the manufacturer at http://www.starsnav.com/ before applying configuration to production units.
