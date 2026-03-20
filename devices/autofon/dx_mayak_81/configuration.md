---
slug: /autofon/dx_mayak_81/configuration
id: dx_mayak_81-configuration
sidebar_label: Configuration
title: AutoFon - DX Mayak 8.1 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration notes for AutoFon DX Mayak 8.1 integration with Plaspy including server settings and setup guidance
keywords:
  - AutoFon DX Mayak 8.1 configuration
  - AutoFon DX Mayak 8.1 setup
  - DX Mayak 8.1 Plaspy
  - Plaspy tracker setup
  - Plaspy server configuration
  - DX Mayak configuration guide
  - AutoFon GPS tracker setup
  - vehicle tracking configuration
  - asset tracking setup
  - fleet tracking Plaspy
---

# AutoFon - DX Mayak 8.1 Configuration

This page summarizes the public configuration context for using the AutoFon DX Mayak 8.1 with Plaspy. It covers the shared server settings used by Plaspy, practical setup considerations, and the typical workflow you will follow to point the DX Mayak 8.1 at Plaspy for GPRS reporting and SMS fallback. The guidance below is intended to be practical and manufacturer-agnostic while centering on the Plaspy settings required for connectivity.

Plaspy uses shared server settings across supported trackers and automatically detects the tracker protocol once the device is pointed to the Plaspy endpoint. Exact manufacturer-side steps can vary by firmware version, hardware revision, installation type, and the vendor configuration tools you use, so use the instructions below as a practical checklist and verify device-specific steps with AutoFon documentation when needed.

## Configuration Overview

The goal of this configuration is to prepare the DX Mayak 8.1 to send location, telemetry and alarm events to Plaspy reliably. Configuration focuses on setting the device to report to the Plaspy server endpoint, ensuring the device has a working mobile data link and correct APN, and validating that messages arrive in the Plaspy platform.

- Configure the DX Mayak 8.1 GPRS reporting destination to the Plaspy server using d.plaspy.com or 54.85.159.138 on port 8888.
- Choose the transport method (UDP or TCP) on the device if required; Plaspy supports both and will detect the protocol.
- Ensure the device SIM, APN and power state allow regular check-ins and alarm reporting.
- Validate telemetry and event delivery to Plaspy and confirm that SMS fallback settings are present if you plan to use SMS control or redundancy.
- Save and apply the configuration on the device, then confirm the unit appears online within Plaspy.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol after the device reports to the shared server endpoint

All Plaspy supported devices use the same port for reporting and Plaspy will identify the protocol used by the DX Mayak 8.1 automatically.

## Typical Requirements Before Setup

- A charged DX Mayak 8.1 with battery installed or powered for initial configuration and testing.
- An active GSM SIM card with a data plan that supports GPRS (2G) and outbound connections; SMS capability if you intend to use SMS fallback.
- Access to the official AutoFon configuration method such as the USB loader, manufacturer software, or documented SMS command set.
- Correct APN settings for the SIM operator configured on the device.
- Access to a PC or smartphone if the device requires a local configurator or BLE pairing for setup.
- Knowledge of the device IMEI or unique identifier to verify the correct unit in Plaspy after configuration.

## How This Tracker Connects to Plaspy

When configured for Plaspy, the DX Mayak 8.1 sends structured GPRS messages to the shared Plaspy server endpoint and port. Plaspy receives those messages, parses the tracker protocol automatically, and displays location, telemetry and event alerts in the platform.

- The device is set to report to d.plaspy.com or 54.85.159.138 on port 8888 using UDP or TCP.
- Regular position and telemetry messages are sent to Plaspy for map visualization and dashboard reporting.
- Event-driven alerts (movement, crash, SOS) are transmitted immediately and appear as alarm events in Plaspy.
- SMS can be configured as a secondary control and notification channel when GPRS is unavailable.
- The tracker’s stored message retransmission behavior helps preserve events during network outages and sends queued packets to Plaspy when connectivity returns.

## Common Configuration Workflow

1. Access the official AutoFon configuration method or software for the DX Mayak 8.1 (USB loader, manufacturer PC tool, or SMS command interface).
2. Enter the Plaspy server address using d.plaspy.com or 54.85.159.138 as the reporting endpoint.
3. Set the reporting port to 8888 on the device.
4. Choose UDP or TCP transport if the device requires an explicit transport selection.
5. Configure the SIM APN and any SMS numbers required for fallback or remote control.
6. Apply or save the configuration and perform any required device restart.
7. Validate that the DX Mayak 8.1 is reporting to Plaspy and appears online in your monitoring environment.

These steps reflect the general, public workflow; exact menu names and command syntax depend on the manufacturer tool and firmware revision.

## Example Configuration Commands

The DX Mayak 8.1 can be configured via AutoFon’s configuration software, USB loader, or SMS commands depending on the firmware and regional variant. Because manufacturer tools and SMS command sets vary across firmware versions, there are no universal commands included here. Use the AutoFon official configurator or the device SMS command list from AutoFon to apply the Plaspy server settings (d.plaspy.com or 54.85.159.138) and set port 8888.

If you are using the AutoFon SMS command interface or loader and need to apply APN placeholders, the APN values should be set to your mobile operator settings (for example, replace [apn] with the operator APN). Refer to AutoFon documentation for the exact command syntax for your firmware.

## Configuration Notes

- Firmware differences can change the exact configurator menus, SMS command names, and parameter order; confirm commands for your firmware version in AutoFon documentation.
- Choose UDP or TCP based on your installation preference; Plaspy supports both and will auto-detect the protocol when the device connects.
- Ensure APN values match the mobile operator for the SIM card in the device; incorrect APN prevents GPRS reporting.
- If you plan to rely on SMS fallback, confirm the device SMS center and authorized control numbers are configured correctly.
- For concealed or long-term battery deployments, validate reporting intervals and event settings to balance battery life and telemetry frequency.

## Why Use Plaspy with This Configuration

Configuring the AutoFon DX Mayak 8.1 to report to Plaspy provides a reliable path to persistent visibility, event alerting, and telemetry monitoring for vehicles and valuable assets. The combination of long battery life, accelerometer-driven alarms and queued retransmission behavior pairs well with Plaspy’s platform features for map visualization, event workflows and operational oversight.

To learn more about Plaspy and supported integrations visit https://www.plaspy.com. For the latest device specific configuration steps, firmware notes and SMS or USB command references verify details on the manufacturer site https://www.autofon.ru/ as device behavior and setup methods can change with new firmware and hardware revisions.
