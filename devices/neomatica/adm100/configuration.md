---
slug: /neomatica/adm100/configuration
id: adm100-configuration
sidebar_label: Configuration
title: Neomatica - ADM100 Configuration
sidebar_class_name: menu_item_tracker
description: Public setup guide for Neomatica ADM100 integration with Plaspy including server settings and a practical configuration workflow
keywords:
  - Neomatica ADM100 configuration
  - ADM100 setup
  - Neomatica GPS tracker
  - Plaspy configuration
  - GPS tracker server configuration
  - vehicle tracking setup
  - ADM100 Plaspy setup
  - fleet management tracker
  - EGTS tracker configuration
  - GPRS tracker setup
---

# Neomatica - ADM100 Configuration

This page covers the public configuration context for using the Neomatica ADM100 with Plaspy. It explains the practical server settings Plaspy requires and outlines the general steps to prepare and point the ADM100 to Plaspy for live tracking. The guidance here is based on publicly available ADM100 device characteristics and the shared Plaspy server settings required for integration.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools. The ADM100 supports configuration via USB, SMS, or GPRS and can address servers by domain name, which makes it a good match for Plaspy domain based setup and remote reporting.

## Configuration Overview

Configuring the ADM100 for Plaspy is primarily about ensuring the device can reach the Plaspy server endpoint over the mobile network and report correctly over the agreed transport. This process prepares the ADM100 to stream position and event data into Plaspy so vehicles become visible on live maps and historical reports.

- Set the device server address to the Plaspy server domain or IP and use the shared port required by Plaspy.
- Select the transport protocol if the device requires a TCP or UDP choice and confirm data reaches the platform.
- Verify APN and SIM data connectivity so GPRS reporting works reliably from the vehicle.
- Apply configuration and restart the device if required to begin reporting.
- Validate the unit appears in Plaspy and that position, speed, and event messages are visible.
- If needed, use the ADM100 local storage and remote firmware features for recovery and updates.

## Plaspy Server Settings

Use these public Plaspy server settings exactly as provided when configuring the ADM100 server target.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

All Plaspy supported devices use the same port and Plaspy will detect the ADM100 protocol automatically once the device reports to the configured endpoint.

## Typical Requirements Before Setup

- A powered ADM100 installed or on a bench with vehicle voltage applied in the supported range.
- An active SIM card with a data plan and correct APN configured for GPRS reporting.
- Access to the official Neomatica configuration method or software such as USB tools, SMS commands, or GPRS configuration per the ADM100 manual.
- Knowledge of the desired transport type UDP or TCP and readiness to set the device to d.plaspy.com or the Plaspy server IP.
- A Plaspy account or administrator able to confirm device visibility after configuration and to map units in the platform.
- Optional access to the ADM100 manual or technical support for firmware specific instructions.

## How This Tracker Connects to Plaspy

The ADM100 sends GNSS based location fixes and device events to the Plaspy server using GPRS. When configured to point at the Plaspy endpoint, the device reports location, IO events, and stored route data so Plaspy can present live and historical telemetry.

- The ADM100 is configured to report to the shared Plaspy server endpoint using domain or IP addressing.
- Data is sent over GPRS to Plaspy on port 8888 using UDP or TCP as selected on the device.
- Plaspy ingests position, speed, heading, and event messages for live maps and alerts.
- Route history stored in the ADM100 can be uploaded to Plaspy for playback and compliance reporting.
- Plaspy automatically detects the tracker protocol so minimal protocol selection is required on the platform side.

## Common Configuration Workflow

1. Access the official Neomatica configuration method or software for the ADM100 using USB, SMS, or the manufacturer tool.
2. In the device server settings enter the Plaspy server domain d.plaspy.com or optionally the server IP 54.85.159.138.
3. Set the reporting port to 8888 to match Plaspy's single port usage for all devices.
4. Choose UDP or TCP if the ADM100 requires an explicit transport selection.
5. Configure the device APN and SIM settings so GPRS data can reach the internet and the Plaspy endpoint.
6. Apply or save the configuration and restart the device if the ADM100 firmware requires a reboot to activate settings.
7. Validate the device reports to Plaspy by confirming the unit appears in the Plaspy platform and that position and event messages are received.

## Example Configuration Commands

The ADM100 supports configuration via manufacturer tools, SMS commands, or USB utilities depending on firmware. Exact commands and their formats vary across firmware versions and vendor utilities. For this public guide no device specific commands are provided here. Refer to the Neomatica ADM100 manual for the precise SMS or USB command set and follow those manufacturer procedures to point the device at d.plaspy.com or 54.85.159.138 on port 8888.

If you prefer SMS based configuration consult the ADM100 manual for the correct SMS syntax and placeholders for APN information. Keep any placeholders such as APN values or usernames ready from your cellular operator.

## Configuration Notes

- Firmware and configuration utilities differ by release and region so consult the ADM100 manual for exact command syntax and GUI options.
- Choose UDP or TCP based on installer preference and network reliability; Plaspy will accept either on port 8888 and detect the protocol.
- The ADM100 supports domain name addressing which allows use of d.plaspy.com rather than an IP address for simpler long term operations.
- Confirm APN, SIM and GPRS connectivity before expecting live reports to appear in Plaspy.
- For bulk deployments, validate one unit end to end before applying the same settings across a fleet to ensure consistent behavior.

## Why Use Plaspy with This Configuration

Using the Neomatica ADM100 with Plaspy provides organizations a straightforward way to collect real time GPS and event data for fleet monitoring, route replay, and alerting. The ADM100’s non volatile route storage, flexible I O, and RS 485 interface complement Plaspy’s platform features to deliver continuous visibility and operational reporting even when network coverage is intermittent.

To learn more about Plaspy and how ADM100 devices appear on the platform visit https://www.plaspy.com. For the latest device specific configuration commands, firmware notes, and manufacturer instructions verify details on the Neomatica website https://neomatica.com/ as methods and firmware behavior can change over time.
