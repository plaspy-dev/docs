---
slug: /queclink/wr100_leu/features
id: wr100_leu-features
sidebar_label: Features
title: QuecLink - WR100 LEU Features
sidebar_class_name: menu_item_tracker
description: Public feature summary for the QuecLink WR100 LEU industrial LTE router and how it functions as a Plaspy compatible gateway for GPS tracker telemetry
keywords:
  - QuecLink WR100 LEU
  - WR100LEU features
  - QuecLink gateway
  - industrial LTE router
  - Plaspy compatible gateway
  - dual SIM failover
  - serial telemetry RS485 RS232
  - LTE Cat 4 router
  - remote management FOTA
  - vehicle telemetry gateway
---

# QuecLink - WR100 LEU Features

This page provides a public, feature-focused overview of the QuecLink WR100 LEU and how it functions as a Plaspy compatible gateway. It describes the WR100 LEU's role carrying GPS tracker telemetry, event messages, and telemetry streams into the Plaspy platform and outlines practical capabilities you can expect when integrating this router with Plaspy-compatible trackers.

Exact feature availability and behavior can vary by firmware version, hardware revision, regional model, installation method, and the manufacturer's implementation choices. Use this page as a practical guide to the product capabilities and how they relate to Plaspy, and consult official QuecLink documentation for the latest device specific details.

## Feature Overview

The WR100 LEU is a compact industrial LTE Cat 4 router designed to act as a resilient communications gateway for telemetry and tracking data. It focuses on secure, always-on transport between field devices and cloud platforms like Plaspy, using multiple backhaul options and robust remote management tools to reduce downtime.

- Industrial 4G LTE Cat 4 cellular backhaul for high throughput telemetry forwarding to cloud services.
- Dual SIM redundancy and link monitoring to maintain connectivity for continuous tracker reporting.
- Flexible wired and wireless local interfaces including Ethernet, 2.4 GHz WiFi, and serial ports for connected telematics devices.
- OpenWrt based remote management with Web UI, SSH, SMS control and FOTA for centralized maintenance.
- Security and tunneling options such as VPN and firewall rules to protect telemetry and command traffic en route to Plaspy.

## Core Features of QuecLink - WR100 LEU

- LTE Cat 4 cellular modem with WCDMA and GSM fallback for broad coverage and reliable data transport.
- Dual SIM failover and automatic load balancing to minimize service interruptions for connected trackers.
- Two FE Ethernet ports with one configurable for WAN or LAN to support local network and backhaul scenarios.
- IEEE 802.11 a b g n 2.4 GHz WiFi for local connectivity when needed.
- Serial interface options (RS485 or RS232 on demand) to collect ignition, door, alarm, CAN or other serial telemetry from field devices.
- OpenWrt based management including Web UI, SSH access, SMS control and FOTA for remote updates.
- VPN and firewall protections plus monitoring features for secure transmission of telemetry and command traffic.
- Rugged industrial design with wide input voltage support and extended operating temperatures for vehicle and outdoor installations.

## How These Features Work with Plaspy

When used in a Plaspy deployment the WR100 LEU serves as the transport layer that reliably delivers tracker data and device telemetry to the Plaspy platform. Its redundancy, security and management features help ensure that location and event information from Plaspy-compatible trackers reach the cloud with minimal interruption.

- Real time forwarding of GPS coordinates and telemetry from connected trackers into Plaspy for mapping and tracking.
- Continuous uplink availability via dual SIM and link failover so Plaspy receives position updates and alarm messages during network transitions.
- Serial and CAN telemetry aggregation from vehicle or asset devices so Plaspy can include those signals in dashboards and reports.
- Encrypted tunnels and firewall rules to protect command and control messages routed between Plaspy and managed devices.
- Remote management and FOTA help keep gateways online and up to date, supporting sustained Plaspy visibility across fleets.

## Typical Use Cases

- Fleet management where resilient cellular backhaul is needed to keep Plaspy trackers reporting continuously.
- Anti theft and immobilization systems that require secure, low latency transport of alarms and control commands.
- Remote telemetry for industrial sites where serial or CAN sensors need to be relayed into Plaspy for monitoring.
- Smart transport and infrastructure projects where local gateways aggregate multiple tracker feeds for Plaspy ingestion.
- Retail and kiosk deployments that require LTE primary connectivity with Ethernet or WiFi fallback for Plaspy asset tracking.

## Feature Availability Notes

- Manufacturer firmware and regional hardware variants can change supported cellular bands, interface options, and exact feature sets.
- Serial port availability and type may be model dependent and offered as RS485 or RS232 on demand for specific configurations.
- The WR100 LEU is a communications gateway and does not include an integrated GNSS receiver for standalone GPS tracking; it transports location data from Plaspy-compatible trackers or external GNSS modules.
- Remote management features and VPN options depend on the installed firmware and configuration chosen by the deployer.
- Confirm power input ranges, environmental ratings, and certifications for the specific model and revision intended for deployment.

## Why Use Plaspy with These Features

Using the WR100 LEU as the communications backbone for Plaspy-compatible GPS trackers provides organizations with a resilient, manageable and secure transport path. The router's dual SIM redundancy, remote management capabilities, and industrial interfaces make it well suited for deployments where uptime, telemetry continuity, and secure command delivery are priorities for fleet and asset tracking programs.

To learn more about how Plaspy integrates with gateways and trackers visit https://www.plaspy.com. For the most current device specifications, firmware behavior and manufacturer details verify information on the official QuecLink website https://www.queclink.com/
