---
slug: /careu/ez1/configuration
id: ez1-configuration
sidebar_label: Configuration
title: CAREU - EZ1 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for CAREU EZ1 GPS tracker integration with Plaspy including server settings and setup workflow
keywords:
  - CAREU EZ1 configuration
  - CAREU EZ1 setup
  - EZ1 Plaspy configuration
  - CAREU GPS tracker setup
  - vehicle tracking CAREU EZ1
  - EZ1 server configuration
  - CAREU EZ1 GPS platform setup
  - fleet management EZ1
  - Plaspy tracker configuration
  - EZ1 LTE tracker setup
---

# CAREU - EZ1 Configuration

This page documents the public configuration context for using the CAREU EZ1 GPS tracker with Plaspy. It describes the shared Plaspy server settings, what to check before integration, and the practical workflow to prepare an EZ1 device so it can report location and status into the Plaspy platform. Use this page as a practical starting point and combine it with the device documentation when performing an installation.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol at the platform side. Manufacturer-side setup steps for the EZ1 can vary by firmware version, hardware revision, installation type, and the vendor configuration tools you use. The guidance below focuses on the public Plaspy endpoint and common setup steps you will apply using the CAREU configuration method available for your EZ1 unit.

## Configuration Overview

Configuring the CAREU EZ1 for Plaspy prepares the tracker to send telemetry to the platform and ensures visibility for fleet monitoring. The process is typically short when you have the correct server settings and the device is reachable via its cellular link or local configuration method.

- Point the EZ1 to the Plaspy server endpoint so the device sends position and event data to the platform.
- Select the transport protocol the device supports (UDP or TCP) if required in the device configuration.
- Verify cellular connectivity, power, and firmware state so the tracker can establish data sessions.
- Save and apply changes, then confirm the device is visible in Plaspy and reporting as expected.
- Keep the manufacturer documentation handy for variant specific steps such as Bluetooth setup or accessory wiring.

## Plaspy Server Settings

- Server domain: d.plaspy.com  
- Server IP: 54.85.159.138  
- Port: 8888 (Plaspy uses the same port for all supported devices)  
- Transport: device may be configured to use UDP or TCP on port 8888  
- Plaspy automatically detects the tracker protocol when the device connects

These values are the public, shared settings you will enter into the CAREU EZ1 configuration tool or SMS/USB/Bluetooth configuration method as applicable.

## Typical Requirements Before Setup

- A powered EZ1 unit with the correct cellular version (LTE or 2G) for your deployment area.
- An active SIM card with a data plan and cellular signal for internet connectivity when using cellular reporting.
- Access to the CAREU official configuration method for your EZ1 (manufacturer software, Bluetooth configuration for LTE version, or the vendor's recommended tool).
- Knowledge of the device firmware version and any release notes that affect configuration parameters.
- Physical access to the device for initial setup and a safe environment to perform restarts if required.
- A registered Plaspy account or platform access so you can validate device connectivity and data after configuration.

## How This Tracker Connects to Plaspy

The CAREU EZ1 sends location and event data to the Plaspy platform by targeting the public Plaspy server endpoint and port. Once configured, the device will initiate connections to Plaspy and the platform will parse the incoming messages using automatic protocol detection.

- The EZ1 reports position updates and event messages to the Plaspy endpoint d.plaspy.com or 54.85.159.138 on port 8888.
- The device can use either UDP or TCP transport based on what is configured on the tracker.
- Plaspy detects the tracker protocol automatically when the device connects, so the platform can interpret messages from the EZ1.
- After successful configuration the tracker becomes visible in Plaspy for real time monitoring and historical reporting.
- Regular validation of reporting after deployment confirms the tracker is sending expected events to the platform.

## Common Configuration Workflow

1. Access the official CAREU EZ1 configuration method or software recommended by the manufacturer for your unit.
2. Locate the server or remote host settings in the configuration interface.
3. Enter the Plaspy server as either the domain d.plaspy.com or the IP 54.85.159.138.
4. Set the server port to 8888 (this is the shared port Plaspy uses for all devices).
5. Choose UDP or TCP transport if the device requires an explicit transport selection.
6. Apply or save the configuration changes on the EZ1 and confirm the settings are stored.
7. Restart the device if required by the manufacturer configuration flow.
8. Validate in Plaspy that the device reports and updates its status and position correctly.

## Example Configuration Commands

The exact command set or configuration strings for the CAREU EZ1 depends on the configuration method your device uses (e.g., Bluetooth tool, SMS commands, USB/serial, or manufacturer software). Because commands vary by firmware and tool, reproduce here only a general recommendation:

- Use the official CAREU configuration tool or the Bluetooth interface for LTE units to enter the server and port values shown above.
- If your vendor provides SMS configuration commands, follow the official SMS syntax from CAREU documentation to set the server and port, preserving any placeholders they require.

Since public modelConfiguration details for the EZ1 were not provided here, refer to the CAREU configuration manual for exact command syntax or contact your device supplier for the proper command examples.

## Configuration Notes

- Firmware differences can change available configuration options and command syntax; confirm firmware version before performing mass deployments.
- If given a choice, test both UDP and TCP on a single device to determine the preferred transport for your network and required reliability.
- Bluetooth configuration for the LTE EZ1 version may allow local setup without SMS or USB; check the manufacturer tool for this option.
- Keep a record of the server entries you apply (domain and IP) so troubleshooting can reference the same values.
- Always confirm settings have been saved and that the device has restarted if the configuration process requires it.

## Why Use Plaspy with This Configuration

Using the CAREU EZ1 configured to report to Plaspy gives organizations a reliable, standardized endpoint for collecting vehicle telemetry and event data. With the shared Plaspy server settings and automatic protocol detection, teams can reduce per-device configuration complexity and focus on deployment scale and operational monitoring.

To learn more about Plaspy and how it supports multi-vendor tracker integrations, visit https://www.plaspy.com. Please verify the latest device specific setup steps, firmware behavior, and manufacturer details on the official CAREU site at https://www.systech-iot.com/ as hardware and software practices can change over time.
