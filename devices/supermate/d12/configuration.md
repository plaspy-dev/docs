---
slug: /supermate/d12/configuration
id: d12-configuration
sidebar_label: Configuration
title: Supermate - D12 Configuration
sidebar_class_name: menu_item_tracker
description: Public guide to configure Supermate D12 for use with Plaspy including required server settings and setup workflow
keywords:
  - Supermate D12 configuration
  - Supermate D12 setup
  - Supermate D12 Plaspy
  - Supermate D12 server configuration
  - Supermate D12 GPS setup
  - Supermate D12 tracking configuration
  - Supermate tracker configuration
  - GPS tracker configuration Plaspy
  - vehicle tracking Supermate D12
  - Plaspy device setup
---

# Supermate - D12 Configuration

This page covers the public configuration context required to use the Supermate D12 GPS tracker with the Plaspy platform. It explains the shared Plaspy server settings you will point the device to, how the device generally connects to the platform, and practical checks to validate communication. The information here is intended to help technical installers and fleet administrators prepare the device for integration with Plaspy.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when the device connects. Exact manufacturer side steps can vary by firmware version, hardware revision, installation type, and vendor tools, so use this guide together with the official Supermate documentation for device specific commands and utilities.

## Configuration Overview

The goal of configuration is to prepare the Supermate D12 to send location and event data to Plaspy and to verify that the device is visible in the platform. This involves updating the device endpoint, confirming transport settings, and validating live reporting after a restart or test event.

- Point the D12 to the Plaspy server so its telemetry reaches the platform
- Select the transport method supported by the device and Plaspy
- Save and apply changes on the device or via the manufacturer tool
- Restart or trigger a test report to validate connectivity on Plaspy
- Confirm the device appears in Plaspy and reports expected location updates

## Plaspy Server Settings

Configure the D12 to report to the following Plaspy server settings when performing the manufacturer configuration steps:

- server domain d.plaspy.com
- server IP 54.85.159.138
- port 8888
- transport support for UDP or TCP
- automatic protocol detection in Plaspy

Note that Plaspy uses the same port for all supported devices and will attempt to detect the tracker protocol automatically when the device connects.

## Typical Requirements Before Setup

- Confirm the Supermate D12 has power and is operational according to the manufacturer guide
- Install and activate a suitable GSM SIM if the device uses cellular networks for reporting
- Have access to the official Supermate configuration method or software used for device programming
- Ensure you know whether the device requires TCP or UDP selection when configuring the server
- Verify network coverage and that the SIM account allows data or relevant messaging required by the device
- Keep the device firmware and manufacturer documentation available for reference

## How This Tracker Connects to Plaspy

When configured for Plaspy, the Supermate D12 will send periodic location and event data to the shared Plaspy server endpoint and port. Plaspy receives the incoming connection and maps the device to an account or registration based on the tracker protocol and identifier.

- The tracker reports to d.plaspy.com or directly to the IP 54.85.159.138
- All communication targets port 8888 on the Plaspy endpoint
- The device may use UDP or TCP transport depending on the D12 configuration choice
- Plaspy automatically detects the tracker protocol and processes incoming telemetry
- Once reporting is validated, the device becomes visible in the Plaspy platform for monitoring and event alerts

## Common Configuration Workflow

1. Access the official Supermate configuration method or software recommended by the manufacturer.
2. Enter the Plaspy server value by using either the domain d.plaspy.com or the IP 54.85.159.138.
3. Set the device port to 8888 (Plaspy uses the same port for all devices).
4. Choose UDP or TCP if the device requires a transport selection.
5. Apply or save the configuration in the device tool or via the device interface.
6. Restart the device if the tool or manufacturer guide indicates a reboot is required.
7. Validate that the device reports to Plaspy by checking for incoming data and device visibility on the platform.

## Example Configuration Commands

The exact commands or SMS strings required to configure the Supermate D12 depend on the manufacturer tool, firmware version, and the configuration channel used (software, SMS, or web tool). Because manufacturer configuration formats vary, consult the Supermate configuration manual or the device configuration utility for the precise command syntax and examples. If you are using a manufacturer app or SMS method, follow the official command set provided by Supermate.

## Configuration Notes

- Firmware differences can change command formats, available fields, and the presence of transport selection; verify the device firmware before applying a procedure.
- Choose UDP or TCP based on the device capability; both transports are accepted by Plaspy on port 8888 but behavior may differ slightly under network conditions.
- If the D12 uses a SIM, confirm the APN and data capability with the SIM provider to ensure telemetry can reach the Plaspy server.
- Keep a copy of any saved configuration and note the device identifier used by the tracker so it can be found quickly in Plaspy after setup.
- Use the official Supermate configuration interface or SMS command set for the D12 rather than third party tools unless the tool is validated by the vendor.

## Why Use Plaspy with This Configuration

Connecting the Supermate D12 to Plaspy provides a straightforward way to centralize location visibility, event alerts, and operational oversight across assets. Using the shared Plaspy server settings simplifies device onboarding and leverages Plaspy's automatic protocol detection so you can manage a mixed fleet without per device server variations.

To learn more about Plaspy and how it supports device integrations, visit https://www.plaspy.com. Please verify device specific configuration steps, firmware behavior, and manufacturer instructions on the official Supermate site http://www.gps-summit.com/ as methods and details can change over time.
