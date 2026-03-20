---
slug: /ruptela/pro5s/configuration
id: pro5s-configuration
sidebar_label: Configuration
title: Ruptela - Pro5S Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Ruptela Pro5S integration with Plaspy using shared server settings and practical setup steps
keywords:
  - Ruptela Pro5S configuration
  - Ruptela Pro5S setup
  - Pro5S Plaspy configuration
  - Pro5S server configuration
  - Ruptela GPS tracker setup
  - Plaspy tracker configuration
  - vehicle tracking Pro5S
  - fleet tracking Ruptela Pro5S
  - Pro5S telemetry setup
  - Ruptela Pro5S LATAM setup
---

# Ruptela - Pro5S Configuration

This page describes the public configuration context for using the Ruptela Pro5S tracker with Plaspy. It focuses on the practical server and setup information that fleet operators and integrators need to prepare a Pro5S device for telematics ingestion by Plaspy. The content is based on the Pro5S product description and Plaspy server settings that are publicly available.

Plaspy uses shared server settings across supported trackers and automatically detects the tracker protocol on connection. Exact manufacturer-side setup steps for the Pro5S can vary by firmware revision, hardware SKU, installation type and the Ruptela configuration tool in use. Use this page to apply the common Plaspy settings, then verify device specifics with the official Ruptela documentation.

## Configuration Overview

The goal of configuring a Pro5S for Plaspy is to direct device telemetry to Plaspy and validate reliable connectivity so the device is visible and manageable in the platform. Configuration prepares the tracker to send GNSS positions, CAN and I O events, and other telemetry that Plaspy ingests for maps, alerts and reporting.

- Point the device to the Plaspy server endpoint so telemetry reaches the platform
- Configure the device transport and port to match Plaspy requirements
- Ensure cellular connectivity and correct APN or SIM provisioning for reliable data delivery
- Validate the device is reporting to Plaspy and visible in platform dashboards
- Confirm firmware and Ruptela configuration tool compatibility before deploying at scale

## Plaspy Server Settings

Use these Plaspy server settings when configuring the Pro5S. Plaspy uses the same port for all supported devices and automatically detects the tracker protocol when the device connects.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol on connect

## Typical Requirements Before Setup

- Physical access to the Pro5S unit and any connected vehicle harness for power and I O verification
- Active cellular SIM provisioned for data with a configured APN where required by the device and operator
- Access to Ruptela official configuration tools or provisioning software for the Pro5S
- Knowledge of the device firmware version and SKU to ensure the correct configuration method
- External GNSS antenna fitted if installation location is obstructed and precise positioning is required
- Charged backup battery or connected power source to complete configuration and verification steps

## How This Tracker Connects to Plaspy

When configured for Plaspy, the Pro5S sends GNSS positions and vehicle telemetry over the cellular network to the shared Plaspy server endpoint and port. Plaspy ingests the incoming protocol automatically, enabling real time maps, event alerts and telemetry dashboards without per-device server customization.

- The Pro5S reports GNSS positions and timestamps to the Plaspy endpoint d.plaspy.com on port 8888
- CAN and I O events are sent alongside position messages so Plaspy can display engine and sensor parameters
- The tracker uses either UDP or TCP transport depending on configuration; Plaspy accepts both on port 8888
- Plaspy automatically detects the tracker protocol when the device connects to 54.85.159.138 on port 8888
- Internal logging on the Pro5S helps avoid data gaps and can replay buffered records when connectivity is restored

## Common Configuration Workflow

1. Access the official Ruptela configuration method or software for the Pro5S, such as Ruptela Manager or the vendor provisioning tool
2. In the device server settings enter the Plaspy server as d.plaspy.com or the numeric endpoint 54.85.159.138
3. Set the device port to 8888 which is used by Plaspy for all devices
4. Choose UDP or TCP transport if the Pro5S configuration requires selecting a transport
5. Configure any required APN and SIM parameters so the device can establish cellular data connectivity
6. Apply or save the configuration in the Ruptela tool and, if instructed, restart the device to activate the new settings
7. Validate that the device reports to Plaspy by checking for incoming data and visibility in the Plaspy platform

## Example Configuration Commands

The exact commands or provisioning steps for a Pro5S depend on the Ruptela configuration tool and the installed firmware. Some integrators use SMS commands, a local USB configuration tool, or Ruptela remote management utilities. Because manufacturer tools and firmware differ, follow Ruptela guidance for the precise command syntax for your device and firmware revision.

## Configuration Notes

- Firmware differences and regional SKUs can change configuration menus and command syntax; always confirm the exact method for your Pro5S variant
- Choosing UDP versus TCP can affect delivery behavior in marginal networks; both transports are supported by Plaspy on port 8888
- All devices in Plaspy use the same port so you do not need a unique port per device when pointing to d.plaspy.com
- Use the Ruptela official tools for bulk provisioning to reduce manual mistakes during fleet scale deployments
- Verify APN and SIM provisioning before finalizing server settings to avoid connection issues when testing with Plaspy

## Why Use Plaspy with This Configuration

Configuring the Ruptela Pro5S to report to Plaspy gives fleet operators a straightforward way to collect high fidelity GNSS and vehicle telemetry in a single platform. The Pro5S hardware, with its u blox GNSS, CAN integration and internal logging, complements Plaspy dashboards and alerts to support real time tracking, driver oversight and security workflows.

To learn more about Plaspy visit https://www.plaspy.com and for the most current device specific configuration details and firmware instructions consult the manufacturer at https://ruptela.com/. Manufacturer specifications and configuration methods can change over time so always verify the latest information on the official Ruptela website.
