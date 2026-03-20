---
slug: /okb_tehnoavtomatika/mta_02_glonass/configuration
id: mta_02_glonass-configuration
sidebar_label: Configuration
title: OKB Tehnoavtomatika - MTA-02 GLONASS Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for the OKB Tehnoavtomatika MTA 02 GLONASS tracker for use with Plaspy
keywords:
  - OKB Tehnoavtomatika MTA 02 GLONASS configuration
  - MTA 02 GLONASS setup
  - MTA 02 configuration Plaspy
  - GLONASS GPS tracker configuration
  - vehicle tracking setup Plaspy
  - GPS tracker server configuration
  - tracker GPRS SMS setup
  - Plaspy tracker compatibility
  - MTA 02 GLONASS manual
  - fleet tracking configuration
---

# OKB Tehnoavtomatika - MTA-02 GLONASS Configuration

This page covers the public configuration context for using the OKB Tehnoavtomatika MTA-02 GLONASS tracker with the Plaspy platform. It summarizes the practical server settings and a recommended workflow to prepare the MTA-02 GLONASS for reporting location and telemetry to Plaspy while using only publicly available information about the device and the Plaspy service.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when the device connects. Exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and the vendor configuration tools used by installers. Use this guide to align the main server and transport settings, then consult the manufacturer documentation or vendor tools for device-specific commands and advanced options.

## Configuration Overview

The goal of configuration is to point the MTA-02 GLONASS at the Plaspy server and confirm that the device reports correctly so it becomes visible and manageable in Plaspy. Configuration prepares the tracker for reliable communication over the cellular network and validates that location updates and event messages arrive at the platform.

- Set the device network reporting endpoint to the Plaspy server address and port.
- Ensure the tracker has valid mobile connectivity, power, and any required APN configured for GPRS data.
- Choose the transport protocol required by your installation either UDP or TCP and save the change.
- Validate connectivity by confirming the device appears in Plaspy and is sending position updates.
- Where available, use the manufacturer configuration tool or SMS commands to apply settings and reboot the tracker.

## Plaspy Server Settings

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888  
- Transport support for UDP or TCP on port 8888  
- Plaspy automatically detects the tracker protocol when the device connects  
- Note that Plaspy uses the same port for all supported devices

## Typical Requirements Before Setup

- Stable power source within the device rated range and a charged internal battery if using battery backup (device supports 9 V to 50 V range).  
- A valid SIM card with a mobile data plan and correct APN settings for GPRS data transmission.  
- Mobile network coverage on GSM 900 or 1800 bands where the device will operate.  
- Access to the official OKB Tehnoavtomatika configuration method or vendor software used to program the tracker.  
- The device physically installed with antennas positioned according to manufacturer guidance for reliable GNSS and GSM reception.  
- Credentials or an account on Plaspy ready to register and monitor the device once it reports to the server.

## How This Tracker Connects to Plaspy

When configured, the MTA-02 GLONASS sends position and event data over the cellular network to the shared Plaspy server endpoint and port. Plaspy receives the incoming device traffic and maps it to the correct device record using protocol detection and identifier parsing.

- The tracker transmits data to d.plaspy.com or directly to 54.85.159.138 on port 8888.  
- You may select UDP or TCP transport on the device; both transports are supported by Plaspy for this model.  
- Plaspy automatically detects the device protocol and processes incoming messages without requiring a different port per device.  
- Location updates, status reports, and allowed event messages are forwarded to the Plaspy platform for display and alerts.  
- After successful configuration and network registration the tracker should become visible in Plaspy within a short time window.

## Common Configuration Workflow

1. Access the official OKB Tehnoavtomatika configuration tool, SMS command set, or vendor software used to program the MTA-02 GLONASS.  
2. Enter the Plaspy server as d.plaspy.com or alternatively use the server IP 54.85.159.138 in the server address field.  
3. Set the remote reporting port to 8888. Plaspy uses the same port for all devices.  
4. Choose the transport protocol UDP or TCP if your device requires explicit transport selection.  
5. Configure any required mobile APN and ensure the SIM has active data service for GPRS reporting.  
6. Apply or save the configuration and, if the device requires it, restart the tracker to activate the new settings.  
7. Validate that the device reports to Plaspy by confirming the device appears in your Plaspy account and that position updates are received.

## Example Configuration Commands

The manufacturer may provide multiple methods to configure the MTA-02 GLONASS, such as a dedicated configuration utility, USB or serial tools, or SMS command strings. Exact command syntax and available parameters vary by firmware and vendor tool. Because public commands for this model are only available in manufacturer documentation, consult the official OKB Tehnoavtomatika configuration guide or your vendor for the precise commands and examples required to set the server, port, transport, APN, and other parameters.

If you have vendor-provided SMS command templates or a configuration file, typical fields you will set are the server address (d.plaspy.com or 54.85.159.138), the port (8888), and the transport mode (UDP or TCP). Preserve any placeholders provided by the vendor and confirm order of operations before applying changes.

## Configuration Notes

- Firmware differences and hardware revisions can change the exact configuration commands or menu paths in the vendor tool; always confirm the correct procedure for your firmware revision.  
- TCP and UDP differences matter for session behavior; choose the transport that matches installation requirements and verify connectivity in Plaspy after switching.  
- The device supports SMS and GPRS communication modes; some installers use SMS commands for out of band configuration where a configuration tool is not available.  
- Ensure APN and mobile operator settings are set correctly on the tracker so GPRS sessions can be established to the Plaspy server.  
- Keep a record of any changed settings and test by observing live updates in Plaspy to confirm the tracker is reporting as expected.

## Why Use Plaspy with This Configuration

Using the MTA-02 GLONASS with Plaspy provides a straightforward way to get GNSS position data, device status, and event reporting into a centralized fleet monitoring platform. Plaspy's shared server settings simplify setup because one consistent server endpoint and port are used across devices, and automatic protocol detection reduces the need for manual protocol selection on the platform side.

To learn more about Plaspy and how to add your tracker to the platform visit https://www.plaspy.com. For the latest device specific commands, firmware notes, and official configuration documentation refer to the OKB Tehnoavtomatika website at http://www.okb-ta.ru/. Manufacturer specifications and configuration methods can change over time so verify current details on the manufacturer site when planning installation or updates.
