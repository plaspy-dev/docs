---
slug: /ruptela/eco5_lite/configuration
id: eco5_lite-configuration
sidebar_label: Configuration
title: Ruptela - Eco5 Lite+ Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for Ruptela Eco5 Lite plus when used with Plaspy tracking platform
keywords:
  - Ruptela Eco5 Lite+ configuration
  - Ruptela Eco5 Lite+ setup Plaspy
  - Eco5 Lite configuration guide
  - Eco5 Lite server configuration
  - Plaspy compatible GPS tracker
  - Ruptela tracker configuration
  - Eco5 Lite GPS platform setup
  - vehicle tracking configuration Plaspy
  - fleet tracker Ruptela setup
  - Eco5 Lite Plaspy integration
---

# Ruptela - Eco5 Lite+ Configuration

This page provides the public configuration context for using the Ruptela Eco5 Lite+ with Plaspy. It describes the practical server settings and the typical setup workflow required to get this tracker reporting into the Plaspy platform. Use the guidance below to prepare the device for communication with Plaspy and to validate that position and telemetry data appear in your Plaspy dashboard.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol on incoming connections, while the exact manufacturer-side steps can vary by Eco5 Lite+ firmware, hardware revision, installation type, and the Ruptela configuration tools used. The Eco5 Lite+ is a rugged, low power tracker designed for EVs, motorcycles and low power fleets and supports cellular connectivity and BLE accessories, so validate the device readiness and consult Ruptela documentation when needed.

## Configuration Overview

This configuration process prepares the Eco5 Lite+ to report location and telemetry to Plaspy using the shared Plaspy server endpoint and port. The goal is to configure the tracker to send data reliably and confirm visibility inside Plaspy.

- Point the tracker to the Plaspy server endpoint and port so it can establish a connection for real time reporting.
- Choose the transport (UDP or TCP) if the device requires explicit selection and save the change.
- Validate cellular connectivity, GNSS fix, and device power to ensure periodic reports are delivered.
- Confirm the device appears in Plaspy and verify that location updates and basic telemetry are visible.
- Retain manufacturer configuration tools and firmware notes for troubleshooting and updates.

## Plaspy Server Settings

Use these public Plaspy settings when configuring the Eco5 Lite+.

- Server domain: d.plaspy.com
- Server IP: 54.85.159.138
- Port: 8888
- Transport: device may be configured using UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol on connection

Note: All devices in Plaspy use the same port (8888). Plaspy will attempt to detect the device protocol automatically after the tracker connects to the server.

## Typical Requirements Before Setup

- Ensure the Eco5 Lite+ has a reliable power source and, if applicable, internal backup battery is charged.
- Install and activate a compatible cellular SIM with data service appropriate for your market and device cellular variant.
- Have access to the official Ruptela configuration method or software such as Ruptela Device Center or vendor tools.
- Confirm you have the correct device firmware and any manufacturer-specific configuration documentation.
- Confirm GNSS and BLE sensors (if used) are enabled and functioning for telemetry reporting.
- Prepare any required identifiers such as IMEI or device ID that Plaspy or your fleet administrator may need to register or identify the device.

## How This Tracker Connects to Plaspy

When configured, the Eco5 Lite+ sends location and telemetry data over its cellular link to the Plaspy shared server endpoint and port. Plaspy receives the incoming connection and automatically determines the tracker protocol so data can be parsed and presented in the platform.

- The tracker sends periodic position updates to d.plaspy.com or 54.85.159.138 on port 8888.
- You can choose UDP or TCP transport on the device when required; the device may be configured using either protocol on port 8888.
- Plaspy automatically detects the incoming protocol and maps device messages to the appropriate parser.
- Once data is received, Plaspy displays live location, event reports, and basic telemetry in the dashboard.
- Use manufacturer tools and device logs to confirm the tracker is attempting connections to the Plaspy endpoint.

## Common Configuration Workflow

1. Access the official Ruptela configuration method or software (for example Ruptela Device Center or an approved vendor tool).
2. Enter the Plaspy server endpoint: either d.plaspy.com or 54.85.159.138 in the device server field.
3. Set the device server port to 8888 (Plaspy uses the same port for all devices).
4. Choose the transport protocol UDP or TCP if the device interface requires a transport selection.
5. Apply or save the configuration in the manufacturer tool and push changes to the device.
6. Restart the device if the manufacturer tool or firmware requires a reboot for changes to take effect.
7. Validate that the device is reporting to Plaspy by checking for incoming messages and location updates in the Plaspy dashboard.

## Example Configuration Commands

The Eco5 Lite+ configuration method varies depending on Ruptela tools and firmware. Because model-specific commands and SMS strings differ by firmware and configuration interface, follow Ruptela Device Center instructions or the device manual for exact command syntax. In many deployments you will use the Ruptela configuration software to set:

- Server domain or IP to d.plaspy.com or 54.85.159.138
- Port to 8888
- Transport to UDP or TCP as required

If you are using a command line or SMS-based method provided by Ruptela for your firmware, consult the official Ruptela documentation or the device management tool for precise strings and order of commands.

## Configuration Notes

- Firmware differences can change configuration menu labels and available options; always verify the firmware version before applying settings.
- Some installers prefer setting the server as a domain (d.plaspy.com) while others use the server IP (54.85.159.138); both are accepted by Plaspy.
- Choose UDP or TCP based on installer preference and network considerations; both transports are supported by Plaspy on port 8888.
- Keep a record of device identifiers such as IMEI and device ID to help match devices in Plaspy after configuration.
- For remote provisioning or bulk deployments, use Ruptela’s device management or provisioning tools consistent with your firmware and vendor practices.

## Why Use Plaspy with This Configuration

Using the Eco5 Lite+ with Plaspy gives fleet operators compact, energy efficient hardware combined with a unified server endpoint for straightforward integration. The device’s rugged design, broad voltage tolerance, internal backup battery, and BLE support make it well suited for EVs, motorcycles, and low power fleets that need reliable location and telemetry reporting.

To learn more about Plaspy and how it supports device integrations like the Eco5 Lite+, visit https://www.plaspy.com. For the latest device specific setup instructions, firmware details, and manufacturer guidance verify the information available at the Ruptela website https://ruptela.com/.
