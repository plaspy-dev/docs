---
slug: /laipac/s911_lola_s/configuration
id: s911_lola_s-configuration
sidebar_label: Configuration
title: Laipac - S911 LOLA S Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Laipac S911 LOLA S showing Plaspy server settings and practical setup steps
keywords:
  - Laipac S911 LOLA S configuration
  - Laipac S911 setup for Plaspy
  - S911 LOLA S server configuration
  - LOLA S Plaspy integration
  - Laipac GPS tracker configuration
  - mPERS Plaspy compatibility
  - personal tracker Plaspy setup
  - SOS alarm tracker setup
  - fall detection tracker configuration
  - Laipac tracking software setup
---

# Laipac - S911 LOLA S Configuration

This page covers the public configuration context for using the Laipac S911 LOLA S with Plaspy. It summarizes the practical server settings and the common manufacturer-side actions you will need to point a compatible Lola S device to the Plaspy platform. The content focuses on public setup steps and the shared Plaspy endpoint used for telemetry and event delivery.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol on connection. Exact manufacturer configuration steps for a Lola S can vary by firmware, hardware revision, installation type, and vendor tools, so treat the guidance here as the public Plaspy-side configuration context you will apply through the official Laipac configuration method.

## Configuration Overview

The goal of configuration is to make the S911 LOLA S reliably deliver its GNSS, SOS, fall detection, and check-in events into Plaspy so the device becomes visible and manageable from the Plaspy console. You will point the device to Plaspy using the shared server endpoint and the common Plaspy port, then validate reporting and event delivery.

- Point the device to the Plaspy server endpoint so telemetry is routed to your Plaspy account
- Configure transport and port on the Lola S to match Plaspy requirements
- Validate GNSS, SOS, and event reporting on the Plaspy platform after configuration
- Confirm two-way voice and emergency workflows are functional in your operational environment
- Record firmware and configuration details for future troubleshooting and audits

## Plaspy Server Settings

- Plaspy server domain d.plaspy.com is used for device reporting
- Plaspy server IP 54.85.159.138 is an alternate public endpoint you can use
- All devices in Plaspy use the same port which is port 8888
- The device may be configured to use either UDP or TCP transport on port 8888
- Plaspy automatically detects the tracker protocol when the device connects

## Typical Requirements Before Setup

- A powered and functional S911 LOLA S with charged battery and accessible configuration interface
- An active 4G LTE SIM provisioned with voice and data if two-way voice and GNSS upload are required
- Access to the official Laipac configuration method or vendor tool used to set device server and transport settings
- A Plaspy account or administrative access so you can confirm device visibility after configuration
- A clear GNSS sky view for first location fix and to validate GNSS reporting
- Knowledge of current device firmware and any vendor notes that affect configuration commands or menus

## How This Tracker Connects to Plaspy

When the Lola S is configured for Plaspy it sends its GNSS coordinates and event messages to the shared Plaspy server endpoint and port so Plaspy can consolidate the device’s telemetry and alerts. Plaspy receives the data on the common port and applies automatic protocol detection to interpret the incoming tracker protocol.

- The device reports GNSS position and timestamped updates to d.plaspy.com on port 8888
- SOS button presses and fall detection events are transmitted to the Plaspy server for immediate alerting
- Automatic check-ins and geofence events are sent to the same Plaspy endpoint for logging and notifications
- Transport can be UDP or TCP depending on how the device is configured; Plaspy accepts both on port 8888
- Plaspy’s automatic protocol detection identifies the tracker protocol once the device connects to the shared endpoint

## Common Configuration Workflow

1. Access the official Laipac configuration method or software provided by the manufacturer or vendor.
2. In the device server settings enter the Plaspy server domain d.plaspy.com or the IP 54.85.159.138.
3. Set the server port to 8888 which is the shared Plaspy port for all devices.
4. Choose UDP or TCP transport if the Lola S requires a transport selection.
5. Apply or save the configuration within the manufacturer tool or device menu.
6. Restart the device if required by the manufacturer to apply network settings.
7. Validate that the device reports to Plaspy by checking device visibility and incoming telemetry in your Plaspy account.
8. Test SOS and event reporting so alarms and two-way voice workflows function end to end.

## Example Configuration Commands

The exact configuration commands and syntax depend on Laipac firmware and the vendor configuration tool. Laipac devices are commonly configured through the manufacturer web tool, a desktop utility, or vendor provisioning services. Use the official Laipac configuration method to set the server to d.plaspy.com or 54.85.159.138 and port 8888, and select UDP or TCP as required by your chosen transport.

If you have specific public commands or an SMS style command set from Laipac provided by your vendor, follow the order and syntax supplied in that official material and preserve any placeholders such as {{apn}} or {{apnu}} when present. Always keep the device manual or provisioning guide on hand to confirm the correct commands for your firmware.

## Configuration Notes

- Plaspy uses the same port 8888 for all supported devices so you do not need multiple port numbers per model
- Choose UDP or TCP according to the device configuration tool; Plaspy accepts both and will detect the protocol automatically
- Firmware revisions and vendor provisioning tools sometimes change command syntax or menu labels; record firmware versions before making changes
- Two-way voice and SOS workflows may require additional provisioning beyond telemetry server settings depending on carrier and provisioning choices
- Always consult the official Laipac documentation and vendor notes for device specific steps and any required APN or carrier settings

## Why Use Plaspy with This Configuration

Using the Laipac S911 LOLA S with Plaspy allows organizations to consolidate personal safety telemetry alongside other tracked assets, giving caregivers and operations teams a unified view of locations, SOS events, and fall alerts. The Plaspy endpoint accepts the device’s GNSS and event data so teams can route alerts, monitor status, and review historical logs from the same platform used for broader operational oversight.

To learn more about Plaspy visit https://www.plaspy.com and review device specific details on the manufacturer site https://laipac.com/. Please verify the latest device specific configuration methods, firmware behavior, and manufacturer documentation at Laipac to ensure the setup steps and commands you use match the current device revision.
