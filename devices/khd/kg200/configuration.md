---
slug: /khd/kg200/configuration
id: kg200-configuration
sidebar_label: Configuration
title: KHD - KG200 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for KHD KG200 tracker and how to set it up to work with Plaspy servers
keywords:
  - KHD KG200 configuration
  - KG200 Plaspy setup
  - KHD GPS tracker setup
  - KG200 server configuration
  - KHD KG200 guide
  - vehicle tracking configuration
  - fleet management tracker
  - KG200 tracking platform setup
  - GPS tracker Plaspy
  - KHD tracker installation
---

# KHD - KG200 Configuration

This page covers the public configuration context for using the KHD KG200 tracker with Plaspy. It explains the shared server settings Plaspy requires and describes the typical steps to prepare a KG200 for communication with the Plaspy backend. The KG200 is a GNSS tracker designed for vehicle and ship tracking and supports communication over the GSM data network as well as SMS for reporting.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while manufacturer side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. Use this document as a practical guide to the public server values and configuration workflow, and review KHD manufacturer resources for device specific commands or firmware notes.

## Configuration Overview

The goal of configuration is to point the KG200 to the Plaspy backend, ensure the tracker has network access, and confirm that the device reports location and event data to the platform. This process prepares the tracker for reliable visibility in Plaspy and helps validate connectivity before widespread deployment.

- Set the tracker backend to the Plaspy server endpoint and port so it can report telemetry.
- Confirm the tracker has an active SIM and correct APN settings if using GPRS for data reporting.
- Choose the transport mode the device requires and save the configuration on the tracker.
- Validate the device is visible and reporting in Plaspy after configuration.
- Retain any manufacturer logs or response codes for troubleshooting connectivity issues.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP, configure whichever the device requires
- Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

## Typical Requirements Before Setup

- Device powered and accessible via the official KHD configuration method or tool
- Active SIM card with a data plan and correct APN settings if using GPRS data reporting
- Network coverage for GSM data or SMS delivery depending on chosen reporting method
- Access to the KG200 firmware or configuration instructions from KHD or your vendor
- Ability to apply settings via PC software, mobile app, or SMS commands as provided by KHD
- An account or onboarding details for the Plaspy platform so you can confirm device visibility after setup

## How This Tracker Connects to Plaspy

The KG200 sends location and status updates to the Plaspy backend over the configured transport using the shared Plaspy endpoint and port. Once the tracker is pointed at the Plaspy server, Plaspy will automatically detect the protocol and accept incoming reports for processing and mapping.

- The device is configured to report to d.plaspy.com or 54.85.159.138 on port 8888
- The tracker can use either UDP or TCP on port 8888 depending on device settings
- Plaspy automatically detects the tracker protocol so no separate protocol selection is required in the platform
- Reported telemetry becomes visible in Plaspy for tracking, event alerts, and operational monitoring
- If SMS reporting is used, configuration commands or a fallback server address may be applied according to KHD documentation

## Common Configuration Workflow

1. Access the official KHD configuration method or software provided for the KG200, such as PC tools, mobile setup apps, or SMS command lists.
2. Locate the server or backend settings in the device menu or configuration tool.
3. Enter the Plaspy server as either d.plaspy.com or the server IP 54.85.159.138 according to your preference or vendor guidance.
4. Set the device port to 8888 as the destination port for reporting.
5. If the device requires a transport selection, choose UDP or TCP based on installer preference or firmware recommendations.
6. Apply or save the configuration on the KG200 and confirm that settings are written to the device.
7. Restart the device if required by the manufacturer to activate new settings.
8. Validate that the tracker reports to Plaspy and appears in your Plaspy account or platform view.

## Example Configuration Commands

The KG200 supports multiple configuration methods and the exact commands or sequences depend on KHD firmware and toolsets. Because manufacturer commands and SMS strings vary by revision and region, consult the official KHD configuration guide for exact command syntax. Typical methods include PC configuration software, mobile apps, or SMS command strings provided by KHD.

If you have the official KHD command list from the manufacturer, apply the same server domain or IP and port values shown above in the relevant command fields. Keep any placeholder values such as APN or credentials from your provider as-is until you replace them with validated settings.

## Configuration Notes

- Firmware differences may change available configuration menus or required command syntax. Always verify the firmware version before applying instructions.
- If you choose TCP or UDP, be consistent across device and network firewalls. Plaspy accepts either on the shared port but the device must match the chosen transport.
- SMS based configuration may be available as an alternative to GPRS setup. SMS commands are device and firmware dependent.
- Preserve placeholders such as APN or APN credentials when copying command examples and replace them with your network details.
- The Plaspy backend uses the same port for all supported devices and will automatically detect the device protocol on receipt.

## Why Use Plaspy with This Configuration

Configuring the KHD KG200 to report to Plaspy provides an operational backend for fleet and asset visibility, allowing organizations to monitor vehicles and vessels in real time using a consistent server endpoint. Using the shared Plaspy server settings simplifies deployment because the same port and automatic protocol detection reduce per device variation during onboarding.

To learn more about Plaspy and how it handles device connectivity and reporting, visit https://www.plaspy.com. For the most up to date device specific commands, firmware notes, and configuration tools, verify details with the manufacturer at http://www.khd.hk.
