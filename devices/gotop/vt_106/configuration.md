---
slug: /gotop/vt_106/configuration
id: vt_106-configuration
sidebar_label: Configuration
title: GOTOP - VT-106 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for connecting the GOTOP VT-106 motorcycle tracker to Plaspy with practical server settings and setup workflow
keywords:
  - GOTOP VT-106 configuration
  - GOTOP VT-106 setup
  - GOTOP VT-106 server configuration
  - GOTOP VT-106 Plaspy
  - GOTOP VT-106 GPS tracker
  - GOTOP VT-106 GPRS setup
  - vt 106 tracker configuration
  - GOTOP motorcycle tracker setup
  - tracking software configuration
  - Plaspy device configuration
---

# GOTOP - VT-106 Configuration

This page documents the public configuration context for using the GOTOP VT-106 motorcycle GPS tracker with the Plaspy platform. It summarizes the shared server settings Plaspy requires, outlines practical setup steps, and explains what to check on the device side so the VT-106 can report location, status, and alarms to Plaspy over GPRS or SMS where supported.

Plaspy uses shared server settings for supported devices and automatically detects the tracker protocol when data reaches the server, but exact manufacturer-side configuration steps can vary by VT-106 firmware version, hardware revision, installation type, and vendor configuration tools. The VT-106 operates on GSM GPRS networks and supports coordinate reporting via SMS and GPRS along with alarm and status reporting, so this guide focuses on the practical steps needed to point the device at Plaspy and validate connectivity.

## Configuration Overview

Configuring the VT-106 for Plaspy prepares the tracker to send position and status data to a shared Plaspy server endpoint so the device appears and reports reliably in the platform. The process is mainly about telling the device where to send GPRS reports (or using SMS as a secondary method), ensuring network connectivity, and confirming the tracker is reporting to Plaspy.

- Set the VT-106 to report to the Plaspy server endpoint and port used across all Plaspy devices.
- Provide valid mobile data connectivity (GPRS) and any required APN details for the installed SIM card.
- Choose the device transport (UDP or TCP) if the VT-106 configuration interface requires a selection.
- Save and apply the settings, then reboot the tracker if required to ensure the new server settings take effect.
- Validate the device is visible and reporting in Plaspy by checking recent position updates and alarm events.

## Plaspy Server Settings

Use these official Plaspy settings when configuring the VT-106 to report to Plaspy. Plaspy uses the same port for all supported devices and automatically detects the tracker protocol when data arrives.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy performs automatic protocol detection for incoming tracker connections

## Typical Requirements Before Setup

- A charged VT-106 with power connected and the device accessible for configuration.
- A working SIM card installed with active GPRS data and SMS capability as required by your workflow.
- APN and mobile data settings for the SIM carrier available if the device requires manual APN configuration.
- Access to the official GOTOP configuration method or software for the VT-106 (manufacturer tool, SMS commands, or configuration interface).
- Network coverage where the vehicle will operate so the VT-106 can reach the Plaspy server over GPRS.
- The VT-106 IMEI or device identifier documented for registering or locating the device on Plaspy if needed.

## How This Tracker Connects to Plaspy

When configured for Plaspy, the VT-106 will transmit location coordinates, device status, and alarm notifications to the Plaspy server endpoint and port so the device can be monitored in the platform. Plaspy will accept the incoming connection over UDP or TCP and map the device data to the corresponding tracker record.

- The VT-106 sends GPRS packets to the shared Plaspy server endpoint d.plaspy.com or 54.85.159.138 on port 8888.
- Plaspy automatically detects the tracker protocol from the incoming data stream, so the platform can interpret reports without per-device protocol selection on the server side.
- Location updates and alarm reports arrive in Plaspy and become visible for operational monitoring and history.
- SMS can be used as an alternate channel for receiving coordinates or for initial configuration where supported by the VT-106.
- Alarms such as geo-fence, low battery, speeding, and main power loss reported by the VT-106 are forwarded to Plaspy for alerting and review.

## Common Configuration Workflow

1. Access the official GOTOP VT-106 configuration method or software as provided by the manufacturer or installer documentation.
2. Locate the server or GPRS reporting settings in the VT-106 configuration interface.
3. Enter the Plaspy server address either as the domain d.plaspy.com or the IP 54.85.159.138.
4. Set the reporting port to 8888.
5. Choose UDP or TCP as the transport if the VT-106 requires a transport selection in its settings.
6. Apply or save the new configuration and reboot the device if the device or documentation indicates a restart is required.
7. Validate that the VT-106 reports to Plaspy by checking for incoming position updates and alarms on the Plaspy platform.

## Example Configuration Commands

The VT-106 manufacturer provides multiple configuration methods which may include a software configuration tool, SMS command interface, or direct firmware configuration. Exact public command strings and syntax depend on the VT-106 firmware and the vendor tools in use. Because command formats differ across revisions and installers, consult the official GOTOP VT-106 documentation or your supplier for the exact SMS or configuration tool commands to set server, port, transport, and APN.

If your VT-106 supports SMS configuration, the manufacturer documentation will provide the precise SMS command format to set the server and port. When using a configuration tool, enter d.plaspy.com or 54.85.159.138 for the server and 8888 for the port, then select UDP or TCP as required, save, and reboot the device per the tool instructions.

## Configuration Notes

- Different VT-106 firmware versions and hardware revisions may use different configuration menus or SMS command formats; always verify commands against the version you have.
- TCP and UDP are both supported by Plaspy; choose the transport that matches your local device requirements and network environment. Plaspy will detect the protocol automatically on receipt.
- The VT-106 uses the GSM GPRS network for server reporting. Ensure correct APN settings for your SIM carrier are configured in the device if required.
- SMS-based configuration may be available as a fallback for initial setup or when data connectivity is not present, but format and availability depend on the device firmware.
- Keep a record of the VT-106 IMEI or unique device identifier to match the device to its record in Plaspy during validation.

## Why Use Plaspy with This Configuration

Using the GOTOP VT-106 with Plaspy gives fleet operators and motorcycle owners a practical way to centralize location, status, and alarm reporting from a compact, GPRS‑enabled tracker. With the VT-106 reporting to Plaspy's shared server endpoint, organizations gain continuous visibility into vehicle movements, historical tracks, and event alerts in a single platform designed for operational monitoring.

To learn more about Plaspy and how it handles device connections and tracking data, visit https://www.plaspy.com. For the most current VT-106 configuration commands, firmware details, and manufacturer instructions verify the device documentation at the GOTOP website https://www.gotop.cc/ since device specific setup steps and firmware behavior can change over time.
