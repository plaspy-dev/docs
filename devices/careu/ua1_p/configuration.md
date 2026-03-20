---
slug: /careu/ua1_p/configuration
id: ua1_p-configuration
sidebar_label: Configuration
title: CAREU - UA1-P Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for CAREU UA1-P GPS tracker compatibility with Plaspy including required server settings and setup workflow
keywords:
  - CAREU UA1-P configuration
  - CAREU UA1-P setup
  - CAREU UA1-P Plaspy
  - UA1-P configuration guide
  - CAREU tracker configuration
  - Plaspy tracker setup
  - GPS tracker configuration
  - asset tracker setup
  - parcel tracker configuration
  - GPS platform integration
---

# CAREU - UA1-P Configuration

This page provides the public configuration context for using the CAREU UA1-P GPS tracker with the Plaspy platform. It summarizes the practical server values and setup workflow you will use when integrating UA1-P devices into Plaspy, and it is intended for installers, integrators, and technical users preparing devices for cloud tracking and telemetry ingestion.

Plaspy uses a shared server endpoint and port for all supported devices and automatically detects the tracker protocol when the device connects. Manufacturer side steps for configuring the UA1-P can vary with firmware version, hardware revision, installation type, and vendor configuration tools, so treat the guidance here as the public Plaspy-focused portion of a complete setup and verify device specific actions with the official manufacturer documentation.

## Configuration Overview

The goal of configuration is to prepare the UA1-P so it reliably reports location and environmental telemetry to Plaspy. That process typically means pointing the tracker at the Plaspy server, selecting the correct transport, saving parameters, and confirming the device reaches the platform.

- Configure the device network settings and server address so the UA1-P can reach the Plaspy endpoint.
- Choose the transport protocol the device supports and confirm it is enabled.
- Verify cellular connectivity, battery state, and GNSS fixes so the tracker can produce valid reports.
- Save and apply parameters, then restart the device if required to apply network and server changes.
- Confirm the UA1-P appears in Plaspy and that telemetry and location messages are arriving as expected.

## Plaspy Server Settings

When configuring the CAREU UA1-P for Plaspy, use the following public server settings exactly as shown:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on the device as required
- Plaspy automatically detects the tracker protocol when the device connects

Note that Plaspy uses the same port for all supported devices, so the port value 8888 is the common port you will use across device types.

## Typical Requirements Before Setup

- Confirm the UA1-P has a charged battery and is powered or connected per the manufacturer guidance.
- Ensure the installed SIM and cellular subscription provide the required 4G or 2G network access for the device variant.
- Access to the official CAREU configuration method such as the Bluetooth local configuration app or vendor software.
- A clear view of the sky or a valid GNSS fix location for initial position acquisition during testing.
- Knowledge of the device IMEI or unique identifier so you can match the physical device with entries in Plaspy.
- Administrative access to Plaspy account or provisioner role to validate the device appears after configuration.

## How This Tracker Connects to Plaspy

The UA1-P is configured to send its location and sensor telemetry to the Plaspy cloud by pointing the device at the shared Plaspy server endpoint and port. Once configured, Plaspy ingests the UA1-P messages and provides visualization, alerts, and historical data for asset tracking.

- The device reports GNSS fixes and environmental sensor readings to the Plaspy endpoint d.plaspy.com using port 8888.
- Transport can be UDP or TCP depending on the device configuration and network conditions.
- Plaspy automatically detects the tracker protocol, so the platform recognizes UA1-P messages once they reach the server.
- Confirm reporting by checking that the device appears in Plaspy and that expected telemetry channels are populated.
- Because Plaspy uses the same port for all devices, you do not need device-specific port values beyond 8888.

## Common Configuration Workflow

1. Access the official CAREU configuration method such as the Bluetooth local configuration app or vendor PC tool provided by the manufacturer.
2. In the network or server settings enter the Plaspy server address using either d.plaspy.com or the server IP 54.85.159.138.
3. Set the server port to 8888 as the device server port.
4. If the device requires selecting a transport, choose UDP or TCP according to your installation needs.
5. Apply or save the configuration in the device tool and confirm the settings have been written to the device.
6. Restart the UA1-P if the manufacturer documentation requires a reboot to apply changes.
7. Validate that the device reports to Plaspy by checking the device list and telemetry in Plaspy and confirming location updates arrive.

## Example Configuration Commands

The CAREU UA1-P supports local configuration via Bluetooth and vendor tools, and the exact configuration commands or UI fields vary by manufacturer firmware and the tool you use. Because manufacturer tools and firmware versions differ, the precise syntax or SMS/command format is not provided here. When you configure the UA1-P, you will enter the Plaspy server address (d.plaspy.com or 54.85.159.138) and port 8888 and select UDP or TCP in the device configuration interface supplied by CAREU.

If you have a vendor command list from the manufacturer, use those commands to set the server address and port first, then confirm transport and save. The order of operations in the vendor tool usually mirrors the workflow shown above.

## Configuration Notes

- Firmware differences and regional device variants can change the available configuration options and the exact field names in the manufacturer tool.
- Use UDP when lower overhead and slightly faster delivery are preferred, or TCP when you need connection-oriented delivery and retransmission; the UA1-P supports selecting either transport.
- Local Bluetooth configuration is a common field tool for the UA1-P and can be useful for in-field parameter updates without opening the housing.
- Remote parameter configuration and FTP based firmware updates are supported by the device family in general, but verify the exact remote update flow for your firmware revision.
- Always cross-check the device IMEI or serial number when matching devices to entries in Plaspy to avoid misassignment.

## Why Use Plaspy with This Configuration

Using the CAREU UA1-P with Plaspy gives logistics and asset teams a consistent way to collect location and environmental telemetry for parcels and valuable assets. The UA1-P’s compact rugged design, environmental sensing, and rechargeable battery make it well suited to tracked shipments while Plaspy provides centralized visibility, alerting, and historical reporting for operational workflows.

To learn more about Plaspy visit https://www.plaspy.com and review the latest device specific setup details and firmware notes on the manufacturer site https://www.systech-iot.com/. Manufacturer configuration steps, firmware behavior, and device interfaces can change over time, so verify the most current instructions and command syntax with the official manufacturer documentation.
