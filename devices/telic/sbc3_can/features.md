---
slug: /telic/sbc3_can/features
id: sbc3_can-features
sidebar_label: Features
title: Telic - SBC3 CAN Features
sidebar_class_name: menu_item_tracker
description: Public feature overview of the Telic SBC3 CAN GPS tracker and its compatibility with Plaspy
keywords:
  - Telic SBC3 CAN
  - Telic SBC3 CAN features
  - Telic SBC3 CAN GPS tracker
  - SBC3 CAN Plaspy compatibility
  - Telic vehicle interfaces
  - RS232 1-wire CAN tracker
  - rugged GPS tracker Telic
  - Telic SBC3 antenna options
  - battery variant 4 Ah tracker
  - fleet tracking Telic
---

# Telic - SBC3 CAN Features

This page provides a public features overview for the Telic SBC3 CAN when used with Plaspy. It summarizes the practical capabilities you can expect to use through Plaspy for tracking, monitoring, and integrating vehicle interface data, and it explains how those capabilities map to fleet and asset management workflows.

Exact feature availability and behavior depend on device firmware, hardware revision, installation choices, and manufacturer implementation. The information here is based on the device description and is intended as a general, non-sensitive guide for users planning deployments with Plaspy.

## Feature Overview

The Telic SBC3 CAN is a durable GPS tracker designed for telematics projects that need access to vehicle interfaces and robust field performance. It is suited to installations where connectivity to vehicle systems and extended operation in demanding conditions are required.

- GPS tracking functionality for basic location and movement visibility.
- Direct access to vehicle interfaces including RS232, 1-wire, and CAN bus for retrieving vehicle data as supported by the installation.
- Rugged housing suitable for harsh environments and mobile installations.
- Antenna flexibility with internal or external antenna options to match installation needs.
- Optional 4 Ah battery variant to support longer battery powered operation when external power is unavailable.

## Core Features of Telic - SBC3 CAN

- GPS location reporting for position and movement monitoring.
- CAN bus access for vehicle interface data where available and permitted by the vehicle.
- RS232 serial interface access for connecting to legacy telematics devices or sensors.
- 1-wire interface support for compatible peripheral connections.
- Choice of internal or external antennas to optimize signal performance in different installations.
- Ruggedized enclosure designed for use in harsh environments.
- Optional integrated 4 Ah battery for extended unattended operation.
- Compatibility with Plaspy for reporting and device management in fleet contexts.

## How These Features Work with Plaspy

The SBC3 CAN reports location and vehicle interface data into Plaspy so fleet managers and operations teams can monitor assets and view interface-derived telemetry alongside location history. Plaspy detects supported tracker protocols automatically and accepts device connections on the platform server, enabling straightforward integration.

- Location data from the tracker is visible in Plaspy maps and history views for tracking and route analysis.
- Vehicle interface data available via RS232, 1-wire, or CAN can be relayed into Plaspy as telemetry fields when the installation and device configuration provide those signals.
- Antenna and battery options affect deployment planning visible in Plaspy device notes and installation records.
- Rugged housing and variant selection support deployments that require reliable reporting from challenging environments.
- Plaspy handles protocol detection so devices compatible with the platform can connect with minimal per-device configuration.

## Typical Use Cases

- Fleet vehicle tracking for transportation and logistics operations that need continuous location visibility.
- Remote or off-grid asset tracking using the optional battery variant for temporary monitoring.
- Integrating vehicle interface data into telematics workflows for operational monitoring and reporting.
- Deployments in harsh or industrial environments where ruggedized hardware is required.
- Mixed installations where internal antenna is preferred for concealment or external antenna is used for signal reliability.

## Feature Availability Notes

- Feature support may vary by firmware version and factory hardware revision; check device firmware release notes for details.
- Some vehicle interface signals and message sets on RS232, 1-wire, or CAN depend on vehicle make and installation wiring.
- Antenna and battery options are configuration choices; confirm the shipped variant when planning deployments.
- Regional variants or custom configurations from the manufacturer can affect available interfaces and power options.
- For device-specific setup, installation wiring, and interface pinouts, refer to the official Telic documentation.

## Why Use Plaspy with These Features

Using the Telic SBC3 CAN with Plaspy gives operations teams a single platform to view location, history, and vehicle interface data in context. Plaspy’s automatic protocol detection and device handling simplify onboarding so you can focus on operational monitoring rather than low-level connectivity details.

If you want to learn more about how Plaspy can work with Telic devices and which deployment choices suit your needs, visit https://www.plaspy.com. For the most current and detailed device specifications, firmware information, and manufacturer implementation notes, please verify details with Telic at https://www.telic.de.
