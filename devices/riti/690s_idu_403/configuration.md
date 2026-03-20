---
slug: /riti/690s_idu_403/configuration
id: 690s_idu_403-configuration
sidebar_label: Configuration
title: Riti - 690s (IDU-403) Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for connecting the Riti 690s IDU 403 tracker to Plaspy with practical server settings and setup workflow
keywords:
  - Riti 690s configuration
  - Riti 690s setup
  - Riti 690s Plaspy
  - Riti 690s server configuration
  - Riti 690s GPS tracker setup
  - Riti 690s vehicle tracking
  - Plaspy tracker configuration
  - Plaspy GPS integration
  - fleet tracker configuration
  - GNSS data logger setup
---

# Riti - 690s (IDU-403) Configuration

This page documents the public configuration context for using the Riti Locator 690s (IDU-403) with Plaspy. It focuses on the practical server settings and workflow required to direct the tracker to Plaspy so the device can deliver position, telemetry, and event data to the platform. The content below uses the publicly available Plaspy server values and general manufacturer integration practices without replacing official Riti documentation.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol once the device reports to the Plaspy endpoint. Exact manufacturer side setup steps can vary by firmware, hardware revision, installation type, and the vendor tools you use to configure the device. Use the guidance below to prepare the 690s for Plaspy integration and confirm settings against Riti documentation where necessary.

## Configuration Overview

Preparing the 690s for Plaspy integration means configuring the device to report to Plaspy's shared server endpoint and validating that telemetry and events arrive in the platform. The goal is to ensure the tracker streams GNSS fixes, G sensor events, odometer and voltage telemetry, and any buffered records to Plaspy reliably.

- Set the tracker to report to the Plaspy server endpoint to enable live tracking and event reporting.
- Configure the device transport to use either UDP or TCP on the Plaspy port so telemetry can reach the platform.
- Validate connectivity and data uploads so that buffered local records are transmitted when network connectivity returns.
- Confirm that Plaspy is detecting the device protocol automatically after the tracker begins reporting.
- Verify that the device is visible and sending expected telemetry types such as GNSS fixes, G sensor events, and odometer updates.

## Plaspy Server Settings

Use the following public Plaspy settings when configuring the Riti 690s for backend reporting.

- Server domain d.plaspy.com as the primary DNS host for reporting
- Server IP 54.85.159.138 as an alternate endpoint for devices that require an IP
- Port 8888 which Plaspy uses for all supported devices
- Transport support for UDP or TCP; configure the tracker to use either transport if it requires a selection
- Plaspy automatically detects the tracker protocol after the device connects to the shared endpoint

## Typical Requirements Before Setup

- A powered and functional Riti 690s unit with any required vehicle or asset wiring completed
- An active cellular SIM and data plan compatible with the device if using cellular transport
- Access to Riti official configuration tools or SMS command list for the 690s as provided by the vendor
- Knowledge of the device firmware version and any manufacturer release notes that affect configuration
- A plan for device placement and physical installation to ensure reliable GNSS reception and cellular coverage
- Administrative access to any configuration software or SMS control channel used to change server settings

## How This Tracker Connects to Plaspy

The Locator 690s is configured to send its location and telemetry to the shared Plaspy server endpoint and port. Once the device is pointed at the Plaspy endpoint and the transport is selected, Plaspy will ingest the device data and assign the correct protocol for parsing and presentation.

- The tracker streams GNSS fixes and A GPS assisted data to the Plaspy endpoint for live mapping.
- Telemetry such as per second odometer updates and battery voltage is forwarded to Plaspy for reporting and alerts.
- G sensor events and SOS or fault signals are transmitted to Plaspy and mapped to event records.
- Local storage records are uploaded to the Plaspy server when network connectivity returns so no-data-loss occurs.
- The device reports either over UDP or TCP to the shared Plaspy port so backend detection and parsing can occur automatically.

## Common Configuration Workflow

1. Access the official Riti configuration method or software for the 690s, for example Riti's device management tool or documented SMS commands.
2. Enter the Plaspy server as either d.plaspy.com or the server IP 54.85.159.138 in the device server or APN reporting settings.
3. Set the device port to 8888 which is the Plaspy port used for all supported trackers.
4. Choose UDP or TCP if the device requires a transport selection and save the transport choice.
5. Apply or save the configuration changes within the manufacturer tool or via the device configuration channel.
6. Restart or power cycle the tracker if required by the configuration method to apply new server settings.
7. Validate that the device reports to Plaspy by checking for initial connection logs and that the device appears in Plaspy with expected telemetry and events.

## Example Configuration Commands

The Riti 690s may be configured through vendor provided tools, a web or desktop configuration utility, or carrier SMS commands depending on the firmware and tooling offered by Riti. Because configuration commands and exact syntax vary by firmware and toolset for this model, the exact commands are not included here. When performing configuration:

- Use the Riti configuration utility or the official SMS command set from Riti to change the server host to d.plaspy.com or 54.85.159.138 and set the port to 8888.
- If your installer tool requires placeholders for APN credentials, replace placeholders such as {{apn}}, {{apnu}}, or {{apnp}} with your SIM provider details as documented by Riti or your carrier.

Always follow the Riti supplied command reference or configuration guide for precise command syntax and the correct order of operations.

## Configuration Notes

- Firmware differences may change the exact configuration interface, SMS command names, or available transport options; check the device firmware version before applying instructions.
- Choose TCP or UDP based on the Riti tool guidance or network behavior; both transports are supported by Plaspy on port 8888.
- Confirm that local buffering behavior is enabled so that stored records are uploaded to Plaspy after connectivity is restored.
- Installer practices and market variations can change available features or default settings; always validate against official Riti documentation.
- Plaspy uses the same port across supported devices so port configuration is consistent when integrating multiple tracker models.

## Why Use Plaspy with This Configuration

Using the Riti 690s with Plaspy provides a practical combination for fleet and asset monitoring where compact GNSS logging, per second odometer data, and G sensor event reporting are important. Pointing the device to the shared Plaspy endpoint enables centralized visibility, alerting, and route playback so operations teams can monitor location, driving events, and vehicle health from a single platform.

To learn more about Plaspy and supported integrations visit https://www.plaspy.com. For the latest device specific configuration methods, firmware behavior, and manufacturer details verify current information on the official Riti website https://www.riti.com.tw/ as vendor specifications and setup processes can change over time.
