---
slug: /huabao/hb_a1l/configuration
id: hb_a1l-configuration
sidebar_label: Configuration
title: Huabao - HB-A1L Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Huabao HB A1L slave lock integration with Plaspy including server settings and setup workflow
keywords:
  - Huabao HB A1L configuration
  - HB A1L Plaspy setup
  - Huabao lock configuration
  - HB A1L server configuration
  - HB A1L setup for Plaspy
  - GPS master integration
  - fleet lock telemetry
  - vehicle security tracking
  - Plaspy device configuration
  - HB A1L installation guide
---

# Huabao - HB-A1L Configuration

This page describes the public configuration context for using the Huabao HB-A1L Slave Electronic Lock with the Plaspy platform. It focuses on how lock events, tamper alarms, RFID access logs, and battery status are forwarded through a paired HB-A1Lm GPS master into Plaspy, and which shared Plaspy server settings are required to receive those events in the platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but exact manufacturer-side setup steps can vary by firmware, hardware revision, installation type, and vendor configuration tools. Use this guide to prepare the HB-A1Lm master and HB-A1L slaves for Plaspy integration, and refer to the manufacturer documentation for device specific instructions.

## Configuration Overview

The goal of configuring the HB-A1L for Plaspy is to ensure the slave lock pairs correctly with its HB-A1Lm GPS master, that the master is configured to send device and lock events to Plaspy, and that those events appear reliably in the Plaspy platform. Because the HB-A1L is a Bluetooth slave device, network configuration is applied on the paired master device and not on the lock itself.

- Pair each HB-A1L slave with an HB-A1Lm master so lock events and alarms can be aggregated by the master.
- Configure the HB-A1Lm master to report aggregated telemetry and lock events to Plaspy using the shared server settings.
- Validate connectivity from the master to Plaspy by checking event delivery and live status in the platform.
- Confirm lock events such as illegal unlock, chain cut, and low battery are visible in Plaspy alongside vehicle location.
- Ensure firmware and vendor tools are the correct version for the deployment environment before wide rollout.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

## Typical Requirements Before Setup

- Access to the HB-A1Lm GPS master configuration tool or official manufacturer software.
- Charged batteries and functional power on both the HB-A1L slave locks and the HB-A1Lm master.
- Physical access to pair each HB-A1L with the HB-A1Lm over Bluetooth.
- Network connectivity on the HB-A1Lm master so it can reach d.plaspy.com or 54.85.159.138.
- Plaspy server settings (d.plaspy.com or 54.85.159.138 and port 8888) available to the installer.
- Manufacturer documentation and release notes for firmware-specific setup nuance.

## How This Tracker Connects to Plaspy

The HB-A1L is a Bluetooth slave that forwards door and security events to an HB-A1Lm GPS master. The master aggregates lock status, RFID reads, and alarm events together with GPS and vehicle telemetry, and then pushes that combined feed to Plaspy using the shared server endpoint and port.

- Lock and alarm events are relayed from the HB-A1L to the HB-A1Lm over BLE.
- The HB-A1Lm master sends aggregated events to d.plaspy.com or 54.85.159.138 on port 8888.
- Transport may be UDP or TCP depending on the master device configuration; Plaspy supports both.
- Plaspy automatically detects the tracker protocol and processes incoming messages without requiring per device port variation.
- Events in Plaspy are correlated with vehicle location and other telemetry provided by the master for unified monitoring.

## Common Configuration Workflow

1. Access the official HB-A1Lm manufacturer configuration method or software and open the device settings.
2. Pair the HB-A1L slave(s) to the HB-A1Lm master using the recommended BLE pairing procedure.
3. In the master server or APN settings, enter d.plaspy.com or 54.85.159.138 as the server address.
4. Set the server port to 8888 as the shared Plaspy port used for all devices.
5. Select UDP or TCP for transport if the configuration tool requires a choice.
6. Apply or save the configuration on the HB-A1Lm master and follow any vendor prompts to commit settings.
7. Restart or power cycle the master device if required by the manufacturer to activate new server settings.
8. Validate that the master is reporting to Plaspy and that HB-A1L lock events are visible in the platform.

## Example Configuration Commands

The exact configuration commands or SMS strings vary by manufacturer tool, firmware version, and the HB-A1Lm master implementation. Because the HB-A1L is a Bluetooth slave, server configuration is applied on the paired master device rather than on the slave. Use the official HB-A1Lm configuration interface or vendor documentation to perform the server and transport setup listed above.

If you are using a manufacturer tool that exposes raw commands, follow the vendor examples in their documentation. Preserve placeholders such as [apn] or similar when present in manufacturer examples and replace them with your network values as instructed by the vendor.

## Configuration Notes

- Firmware differences on the HB-A1Lm master can change UI locations and required steps; always confirm the master firmware version before following a guide.
- Choose UDP or TCP on the master according to vendor recommendations and network reliability considerations; Plaspy accepts both on port 8888.
- Because the HB-A1L has no cellular radio, ensure the HB-A1Lm master has the required network connectivity to reach d.plaspy.com or 54.85.159.138.
- All devices in Plaspy use the same port and the platform automatically detects the incoming tracker protocol, simplifying server-side configuration.
- Always consult Huabao installation instructions for pairing, tamper handling, and mechanical mounting details specific to the HB-A1L.

## Why Use Plaspy with This Configuration

Using the HB-A1L with Plaspy centralizes lock state, alarm events, and RFID access logs with vehicle telemetry so fleet operators can monitor security events in real time and respond faster to theft or tampering. This architecture keeps the HB-A1L compact and rugged by offloading network connectivity to the HB-A1Lm master, while Plaspy presents a unified operational view of location and security data.

To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. For the most current device specific configuration methods, firmware behavior, and manufacturer details verify instructions and downloads on the Huabao official website https://www.huabaotelematics.com/ before final deployment.
