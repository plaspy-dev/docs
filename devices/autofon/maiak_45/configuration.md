---
slug: /autofon/maiak_45/configuration
id: maiak_45-configuration
sidebar_label: Configuration
title: AutoFon - Маяк 4.5 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for using the AutoFon Маяк 4.5 with Plaspy including server settings and setup workflow
keywords:
  - AutoFon Маяк 4.5 configuration
  - AutoFon configuration guide
  - Маяк 4.5 setup for Plaspy
  - Plaspy server configuration
  - GPS tracker setup guide
  - GPRS interval reporting
  - SMS tracking integration
  - vehicle tracking configuration
  - asset tracker setup
  - tracking platform integration
---

# AutoFon - Маяк 4.5 Configuration

This page covers the public configuration context for using the AutoFon Маяк 4.5 tracker with Plaspy. It focuses on the practical server settings and the typical workflow required to point the device at Plaspy so that position reports, motion alerts, and status messages arrive in the platform. The guidance below uses publicly available Plaspy server settings and the capabilities described for the Mayak 4.5 such as GPRS interval packets and SMS reporting.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol once packets arrive. Exact manufacturer-side setup steps can vary by device firmware, hardware revision, installation type, and vendor configuration tools. Use this document as a practical reference and verify device-specific controls in the official AutoFon documentation when performing installation and commissioning.

## Configuration Overview

The goal of configuration is to prepare the Mayak 4.5 to send its interval GPRS packets or SMS reports to Plaspy so the device becomes visible in the Plaspy tracking environment. For most deployments you will set the device server address and port, confirm transport type if required, and then validate that Plaspy receives location and event data.

- Configure the device to report to d.plaspy.com or to the equivalent server IP 54.85.159.138 on port 8888
- Choose UDP or TCP transport on the device if the firmware requires a transport selection
- Ensure APN and SIM data connectivity so the Mayak 4.5 can send GPRS interval packets to Plaspy
- Validate that Plaspy automatically detects the device protocol once the first packets arrive
- Confirm that motion, power disconnect, and heartbeat messages appear in Plaspy as expected

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol when the device begins sending packets
- All devices in Plaspy use the same port for server connections

## Typical Requirements Before Setup

- A powered AutoFon Маяк 4.5 with a charged battery or external power connected
- An active SIM card installed with a data plan and correct APN settings for GPRS packet delivery
- Access to the official AutoFon configuration method or software for your device firmware and hardware revision
- Knowledge of the device PIN and authorized phone numbers if using SMS-based setup or remote control
- A Plaspy account and the ability to match the device to your Plaspy project or fleet after it begins reporting

## How This Tracker Connects to Plaspy

The Mayak 4.5 can transmit GPS coordinates and status data either via interval GPRS packets or via SMS messages to authorized numbers. For Plaspy integration, the device is configured to send its interval-mode GPRS packets directly to the shared Plaspy server endpoint and port so the platform receives and decodes the device protocol automatically.

- Interval GPRS packets are sent to d.plaspy.com or 54.85.159.138 using port 8888
- The device can use either UDP or TCP transport where the firmware allows selecting transport
- Motion detection events and external power disconnects are reported and become alerts in Plaspy
- SMS can be used for immediate location requests or remote commands when GPRS is unavailable
- Plaspy converts incoming packets into live map markers, history trails, and event notifications

## Common Configuration Workflow

1. Access the official AutoFon configuration method or software for the Маяк 4.5 according to the device manual or installer tool
2. Enter the Plaspy server address either as d.plaspy.com or as the IP 54.85.159.138 in the device server field
3. Set the port to 8888 as the destination port for GPRS reports
4. If the device requires a transport selection, choose UDP or TCP according to your site preference
5. Apply or save the configuration changes on the device or via the manufacturer tool
6. Restart the device if required by the firmware to activate the new server settings
7. Validate that the device is reporting to Plaspy by checking for initial heartbeat or position messages in your Plaspy project

## Example Configuration Commands

The exact command set and syntax used to configure the Маяк 4.5 depend on the manufacturer tool, firmware version, and whether you configure using SMS commands or a PC configuration utility. AutoFon devices commonly support SMS commands for server and APN configuration as well as configuration via vendor software. Because model specific commands vary by firmware, follow the AutoFon manual for precise SMS or serial/USB commands. In general, the commands you will provide will set the server to d.plaspy.com or 54.85.159.138 and set the destination port to 8888 and may include an APN placeholder.

Common placeholders you may encounter:
- [apn] for the mobile operator APN name
- [apnu] for APN username if required
- [apnp] for APN password if required

If you prefer SMS setup, consult the device manual for the exact SMS command format and preserve placeholders exactly when replacing them with your operator values. If you use the vendor PC tool, enter d.plaspy.com or 54.85.159.138 and port 8888 in the server configuration fields and save.

## Configuration Notes

- Firmware differences can change the exact SMS command syntax or the location of server configuration fields in vendor software
- Choose UDP or TCP based on your network and reliability needs; Plaspy will accept either and auto detect the protocol
- Verify APN settings and that the SIM has GPRS data enabled before attempting to push interval packets to Plaspy
- SMS control is useful as a fallback for immediate queries or when GPRS is not available; ensure authorized numbers and PINs are configured
- Always keep a copy of the default configuration and document any changes for future maintenance

## Why Use Plaspy with This Configuration

Using the AutoFon Маяк 4.5 with Plaspy provides a low maintenance way to monitor assets, vehicles, or personal items where long battery life and discreet installation are priorities. The device's interval GPRS mode and SMS command support make it straightforward to integrate into Plaspy for event alerts, history reporting, and occasional position updates without continuous high frequency data.

To learn more about Plaspy and how it handles device integrations, visit https://www.plaspy.com. For the latest device specific commands, firmware notes, and manufacturer guidance for the Маяк 4.5, verify details on the official AutoFon site https://www.autofon.ru/ as manufacturer specifications and setup procedures can change over time.
