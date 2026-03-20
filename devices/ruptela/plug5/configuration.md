---
slug: /ruptela/plug5/configuration
id: plug5-configuration
sidebar_label: Configuration
title: Ruptela - Plug5 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Ruptela Plug5 to connect with Plaspy using shared server settings and practical setup steps
keywords:
  - Ruptela Plug5 configuration
  - Plug5 setup Plaspy
  - Ruptela GPS tracker configuration
  - Plug5 server configuration
  - Plug5 fleet management setup
  - Plug5 GPS platform setup
  - Plaspy tracker configuration
  - Plug5 OBD dongle setup
  - Ruptela Plug5 integration
  - Plug5 telematics configuration
---

# Ruptela - Plug5 Configuration

This page provides the public configuration context required to use the Ruptela Plug5 tracker with Plaspy. It explains the shared Plaspy server settings used by supported trackers and describes the practical steps and considerations for preparing a Plug5 OBD dongle to report location and vehicle telemetry to the Plaspy platform.

Plaspy uses a single, shared server endpoint and port across supported devices and automatically detects the tracker protocol. Manufacturer side setup steps for Plug5 can vary by firmware version, hardware revision, installation type, and vendor configuration tools, so this guide focuses on the Plaspy-facing settings and a conservative, practical workflow you can apply before finalizing device integration.

## Configuration Overview

Preparing Plug5 for Plaspy integration centers on configuring the device to send its GNSS and OBD/CAN telemetry to the Plaspy server endpoint and validating that data reaches the Plaspy platform. The objective is to ensure reliable connectivity, correct transport selection, and consistent reporting so vehicles become visible in Plaspy dashboards.

- Configure the tracker to use the Plaspy server endpoint and port so data is routed to Plaspy
- Choose the appropriate transport (UDP or TCP) if the device requires an explicit selection
- Validate cellular connectivity, APN and operator settings so the device can reach Plaspy
- Save and apply device configuration and, if needed, restart the tracker to activate settings
- Confirm the device appears and reports properly inside Plaspy for live tracking and telemetry

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

## Typical Requirements Before Setup

- Access to the vehicle OBD port and physical installation of the Plug5 dongle or compatible OBD location
- Device powered and reachable for configuration, with the required firmware level for your deployment
- Active cellular connectivity for the device variant in use (LTE M with 2G fallback) and a valid SIM or operator subscription as required
- Knowledge of operator APN and any SIM authentication details if your rollout requires custom APN values
- Access to the official Ruptela configuration method or management tools such as Ruptela Device Center or local USB/SMS configuration utilities
- Administrative access to Plaspy so you can verify device reporting and visibility after configuration

## How This Tracker Connects to Plaspy

Plug5 sends GNSS positions and vehicle telemetry to the Plaspy endpoint. When configured with the Plaspy server settings, the device will establish connectivity over cellular networks and forward buffered and live records to the shared Plaspy server and port.

- Device reports location and OBD/CAN telemetry to the Plaspy server endpoint d.plaspy.com or 54.85.159.138
- Data is sent to port 8888 using the transport chosen during configuration (UDP or TCP)
- Plaspy automatically detects the tracker protocol so the platform can interpret incoming messages
- On connectivity loss Plug5 buffers records locally and uploads stored data when the connection is restored
- Successful configuration makes the device visible in Plaspy for real time tracking and event reporting

## Common Configuration Workflow

1. Access the official Ruptela configuration method or software appropriate for your device and firmware (for example Ruptela Device Center, USB configuration tool, or SMS commands if supported).
2. In the server or GPRS settings, enter the Plaspy server domain d.plaspy.com or the IP 54.85.159.138.
3. Set the server port to 8888 as the destination port for telemetry.
4. If the device requires a transport selection, choose UDP or TCP according to your network policy or installer preference.
5. Configure any required APN or SIM operator parameters so the device can establish a cellular connection.
6. Apply or save the configuration and restart the device if the Ruptela tool or device documentation requires a reboot to activate settings.
7. Validate that the device begins reporting to Plaspy and appears in your Plaspy account or monitoring view.

## Example Configuration Commands

Exact configuration commands and procedures for Plug5 depend on the Ruptela management tool and firmware. Plaspy integration requires setting the Plaspy server endpoint and port using the manufacturer provided tools. For Plug5, common manufacturer configuration channels include Ruptela Device Center, USB configuration, or over the air management via Ruptela platforms. Follow Ruptela instructions for your chosen method to enter the Plaspy server domain or IP and set the port to 8888.

## Configuration Notes

- Firmware variations can change configuration menus, field names, or required steps; always confirm the correct procedure for your firmware version.
- Plaspy supports both UDP and TCP transports; choose the transport that best fits your network and reliability requirements.
- Plaspy uses the same port 8888 for all supported devices and automatically detects the tracker protocol, so the critical values to set are the server domain or IP and the port.
- For large deployments use Ruptela Device Center or the Ruptela Device Management Platform to apply settings and perform mass FOTA when available.
- Verify APN and cellular operator settings ahead of time to avoid connectivity delays during rollout.

## Why Use Plaspy with This Configuration

Using Plug5 with Plaspy provides fleets with consolidated location and vehicle telemetry in a single platform. Plug5's OBD form factor and deep vehicle data access combined with Plaspy server routing let organizations centralize monitoring, alerts, and reporting for real time operational visibility, fuel management, and driver behaviour analysis.

To learn more about Plaspy and how it works with compatible trackers like the Ruptela Plug5 visit https://www.plaspy.com. For the latest device specific configuration methods, firmware behavior, and manufacturer guidance verify details on the Ruptela site https://ruptela.com/ as manufacturer specifications and setup steps can change over time.
